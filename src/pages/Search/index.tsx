import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import {
    Pan,
    SearchInnerWrapper,
    SearchInput,
    SearchButton,
    SearchInputWrapper,
    SearchWrapper,
    Title,
    SearchIcon,
    TitleWrapper,
} from './styles'

type SearchState = {
    search: string
}

export const Search: FC = () => {
    const [focusState, setFocusState] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [searchState, setSearchState] = useState<SearchState>({
        search: '',
    })

    const { search } = searchState

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchState({
            ...searchState,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = (): void => {
        if (search.length < 3) {
            console.log('Must be greater than 3 characters')
        }
    }

    useEffect(() => {
        const setIsMobileView = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches)
        }
        setIsMobileView()
        window.addEventListener('resize', setIsMobileView)
        return () => window.removeEventListener('resize', setIsMobileView)
    }, [])
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
                <SearchInputWrapper>
                    <SearchInput
                        value={search}
                        type="text"
                        placeholder="Search For Recipes..."
                        id="search"
                        name="search"
                        onChange={(e) => onChange(e)}
                        onFocus={() => setFocusState(!focusState)}
                        onBlur={() => setFocusState(!focusState)}
                    />
                    <SearchButton isFocus={focusState} onClick={onSubmit}>
                        <SearchIcon />
                    </SearchButton>
                </SearchInputWrapper>
            </SearchInnerWrapper>
        </SearchWrapper>
    )
}
