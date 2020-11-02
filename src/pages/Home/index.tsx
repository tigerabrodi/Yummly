import React, { FC, useState } from 'react'
import {
    InfoWrapper,
    Wrapper,
    ImageWrapper,
    RecipeBook,
    InfoText,
    InfoButton,
    SearchIcon,
} from './styles'

export const Home: FC = () => {
    const [buttonHoverState, setButtonHoverState] = useState(false)
    return (
        <Wrapper>
            <InfoWrapper>
                <InfoText>Find Your Dream Recipes and Enjoy.</InfoText>
                <InfoButton
                    to="/search"
                    onMouseEnter={() => setButtonHoverState(!buttonHoverState)}
                    onMouseLeave={() => setButtonHoverState(false)}
                >
                    Search
                    <SearchIcon isButtonHover={buttonHoverState} />
                </InfoButton>
            </InfoWrapper>
            <ImageWrapper>
                <RecipeBook />
            </ImageWrapper>
        </Wrapper>
    )
}
