import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { Spinner } from 'components/Spinner'
import {
    FailureResponse,
    SuccessResponse,
    useYummlyContext,
} from 'context/YummlyContext'
import { useHistory } from 'react-router-dom'
import {
    Pan,
    SearchInnerWrapper,
    SearchInput,
    SearchButton,
    SearchForm,
    SearchWrapper,
    SearchIcon,
    TitleWrapper,
    SearchInputValidLength,
    ErrorToast,
    ErrorText,
    Title,
} from './styles'

// API key and spoonacular request url
const apiURL = process.env.REACT_APP_API_URL
const apiKEY = process.env.REACT_APP_API_KEY

type SearchState = {
    searchValue: string
}

export const Search: FC = () => {
    // Focus state for input
    const [focusState, setFocusState] = useState(false)

    const [isMobile, setIsMobile] = useState(false)
    const [isErrorCharacters, setIsErrorCharacters] = useState(false)
    const [searchState, setSearchState] = useState<SearchState>({
        searchValue: '',
    })

    const { searchValue } = searchState

    const history = useHistory()

    const { state, dispatch } = useYummlyContext()

    // So we can append query params to the URL and also access them
    // Here we are using non null assertion, because typescript thinks environment variables could be undefined
    const url = new URL(apiURL!)

    // Number of input length (validation)
    const searchLengthValidation =
        searchValue.length < 3 ? `${searchValue.length}/3` : '3/3'

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchState({
            ...searchState,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = async (event: FormEvent): Promise<number | void> => {
        event.preventDefault()
        // Input validation
        if (searchValue.length < 3) {
            setIsErrorCharacters(true)
            return setTimeout(() => {
                return setIsErrorCharacters(false)
            }, 3000)
        }
        dispatch({ type: 'pending' })
        // Set query params
        url.searchParams.append('apiKey', apiKEY!)
        url.searchParams.append('query', searchValue)
        url.searchParams.append('number', '10')
        url.searchParams.append('addRecipeInformation', 'true')

        // For history's search params (url state persistance)
        const splittedSearchParams = url.search.split('&')
        const pushSearchParams = `?${splittedSearchParams[1]}&${splittedSearchParams[2]}&${splittedSearchParams[3]}`

        //  request config
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        // fetch recipes
        const response = await window.fetch(url.href, config)
        try {
            if (response.ok) {
                // Successful response
                const successData: SuccessResponse = await response.json()
                window.sessionStorage.setItem('recipesMount', JSON.stringify(1))
                dispatch({
                    type: 'recipesResolved',
                    payload: successData.results,
                })
                history.push(`/recipes${pushSearchParams}`)
            } else {
                // Failed response
                const failureData: FailureResponse = await response.json()
                dispatch({ type: 'rejected', payload: failureData.message })
                throw new Error(
                    `Something went wrong with the request, message: ${failureData.message}`
                )
            }
        } catch (error) {
            throw new Error(
                `Something went terribly wrong! Message: ${error.message}`
            )
        }
    }

    useEffect(() => {
        // Mobile view to show shorter title
        const setIsMobileView = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches)
        }
        setIsMobileView()
        window.addEventListener('resize', setIsMobileView)
        return () => window.removeEventListener('resize', setIsMobileView)
    }, [])

    if (state.status === 'pending') {
        return <Spinner />
    }

    return (
        <SearchWrapper>
            <SearchInnerWrapper>
                <TitleWrapper>
                    <Title htmlFor="search">
                        {isMobile
                            ? 'Start Cooking Today!'
                            : 'Search Now and Start Cooking Today!'}
                    </Title>
                    <Pan />
                </TitleWrapper>
                <SearchForm onSubmit={(e) => onSubmit(e)} autoComplete="off">
                    <SearchInput
                        value={searchValue}
                        type="text"
                        placeholder="Search For Recipes..."
                        id="search"
                        name="searchValue"
                        onChange={(event) => onChange(event)}
                        onFocus={() => setFocusState(!focusState)}
                        onBlur={() => setFocusState(!focusState)}
                    />
                    <SearchInputValidLength
                        searchNumberLength={searchValue.length}
                    >
                        {searchLengthValidation}
                    </SearchInputValidLength>
                    <SearchButton isFocus={focusState} type="submit">
                        <SearchIcon />
                    </SearchButton>
                    {isErrorCharacters && (
                        <ErrorToast isError={isErrorCharacters}>
                            <ErrorText>
                                Please enter at least 3 characters.
                            </ErrorText>
                        </ErrorToast>
                    )}
                </SearchForm>
            </SearchInnerWrapper>
        </SearchWrapper>
    )
}