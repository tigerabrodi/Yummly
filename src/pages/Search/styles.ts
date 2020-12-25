import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as PanSVG } from 'assets/fried.svg'
import { Search } from '@styled-icons/bootstrap'
import { media } from 'theme/media'
import { wrapperStyles } from 'styles'

/* Wrappers */
export const SearchWrapper = styled.main`
  ${wrapperStyles}
  display: grid;
  grid-template-areas:
    'title'
    'search';
  grid-template-rows: 1fr 3fr;
  justify-items: center;
  align-items: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 98%;
`

/* Title Area */
export const SearchLabel = styled.label`
  font-size: min(6rem, 9vw);
  font-family: ${({ theme }) => theme.fonts.Lora};
  color: ${({ theme }) => theme.colors.Orange};
  font-weight: 700;
  filter: drop-shadow(2px 4px 6px black);
  letter-spacing: 1px;
  ${media.tablet} {
    font-size: max(3.5rem, 4vw);
  }
`

export const TitleWrapper = styled.section`
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  ${media.tablet} {
    border-bottom: 3px solid ${({ theme }) => theme.colors.Orange};
  }
  ${media.desktop} {
    width: 90%;
  }
`

const cook = keyframes`
    from {
    transform: translateY(-3px) translateX(-2px) rotate(8deg) scale(-1, 1);
    }

    to {
    transform: translate(0) scale(-1, 1);
    }
`

export const Pan = styled(PanSVG)`
  display: none;
  ${media.tablet} {
    position: relative;
    width: 8rem;
    height: 10rem;
    transform: scale(-1, 1);
    animation: ${cook} 1s infinite alternate;
    display: block;
    margin-right: 2rem;
    width: max(7rem, 7.5vw);
    height: max(9rem, 9.5vw);
  }
`

/* Search */
export const SearchForm = styled.form`
  height: 100%;
  width: 100%;
  grid-area: search;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const QueryWrapper = styled.section`
  height: 25%;
  width: 95%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${media.custom(370)} {
    height: 21%;
  }
  ${media.phone} {
    height: 22%;
  }
  ${media.tablet} {
    height: 10%;
    width: 98%;
  }
  ${media.desktop} {
    height: 11%;
    width: 90%;
  }
`

export const SearchInput = styled.input`
  font-size: 1.7rem;
  position: relative;
  height: 100%;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Gray};
  background-color: ${({ theme }) => theme.colors.Black};
  border: 2px solid ${({ theme }) => theme.colors.Brown};
  transition: all 0.3s;
  padding-left: 1rem;
  ${media.phone} {
    padding-left: 2rem;
    font-size: 2rem;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.Gray};
  }
  &:focus {
    outline: none;
    box-shadow: 0 5px 5px black;
  }
  ${media.tablet} {
    width: 90%;
  }
  ${media.tablet} {
    font-size: 2.5rem;
  }
`

export const SearchInputValidLength = styled.span<{
  searchNumberLength: number
}>`
  font-size: 1.1rem;
  letter-spacing: 3px;
  font-weight: 700;
  position: absolute;
  transform: translate(-50%, -50%);
  color: ${({ searchNumberLength, theme }) => {
    return searchNumberLength < 3 ? theme.colors.Red : theme.colors.Green
  }};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  top: 78%;
  left: 64%;
  ${media.phone} {
    left: 76%;
    font-size: 1.4rem;
  }
  ${media.tablet} {
    top: 80%;
    left: 87%;
  }
  ${media.desktop} {
    left: 88%;
    top: 80%;
    font-size: max(1.5rem, 1vw);
  }
  ${media.custom(1600)} {
    left: 89%;
  }
`

export const SearchButton = styled.button<{ isFocus: boolean }>`
  left: 85%;
  width: 30%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
  margin-left: 0;
  border-left: 2px solid #854d27;
  cursor: pointer;
  background-color: transparent;
  height: 98%;
  transition: all 0.2s;
  ${media.phone} {
    left: 90%;
    width: 20%;
  }
  ${media.tablet} {
    width: 10%;
    max-width: 11rem;
    border: 2px solid ${({ theme }) => theme.colors.Brown};
    margin-left: 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    top: 0;
    left: 0;
    transition: all 0.8s;
    transform: translate(0, 0);
    height: 100%;
  }
  &:hover {
    ${media.tablet} {
      box-shadow: 0 5px 5px black;
    }
  }
  &:hover svg {
    ${media.tablet} {
      color: ${({ theme }) => theme.colors.White};
      transform: scale(1.1);
    }
  }
  &:hover::after {
    ${media.tablet} {
      transform: scaleY(1);
    }
  }
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.Orange};
    height: 100%;
    width: 100%;
    transform-origin: top;
    transform: scaleY(0);
    transition: all 0.5s;
    top: 0;
    left: 0;
  }
  &:focus {
    outline: none;
  }
  &:active svg {
    transform: scale(0.9);
  }
  &:active {
    box-shadow: none;
    ${media.tablet} {
      transform: scale(0.9);
    }
  }
  ${(props) =>
    props.isFocus &&
    css`
      box-shadow: 0 5px 5px black;
      transition: all 0.3s;
    `};
`

export const SearchIcon = styled(Search)`
  height: 3rem;
  position: relative;
  z-index: 5;
  color: ${({ theme }) => theme.colors.Orange};
  transition: all 0.5s;
`

/* Calories */
export const CaloriesWrapper = styled.section`
  display: grid;
  grid-template-areas:
    'minCaloriesLabel maxCaloriesLabel'
    'minCaloriesInput maxCaloriesInput'
    'caloriesErrorMessage caloriesErrorMessage';
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;
  align-content: space-between;
  height: 40%;
  ${media.custom(400)} {
    height: 35%;
  }
  ${media.phone} {
    height: 30%;
  }
  ${media.tablet} {
    height: 23%;
  }
  ${media.desktop} {
    height: 25%;
  }
`

// Calorie Inputs
const caloriesInputStyles = css`
  font-size: 1.7rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.Gray};
  background-color: ${({ theme }) => theme.colors.Black};
  border: 2px solid ${({ theme }) => theme.colors.Brown};
  transition: all 0.3s;
  height: 100%;
  width: 40%;
  ${media.phone} {
    width: 35%;
  }
  ${media.tablet} {
    width: 20%;
  }
  ${media.desktop} {
    max-width: 12rem;
    font-size: 2.3rem;
  }
  &:focus {
    outline: none;
    box-shadow: 0 5px 5px black;
  }
`

export const MinCaloriesInput = styled.input`
  ${caloriesInputStyles}
  grid-area: minCaloriesInput;
`

export const MaxCaloriesInput = styled.input`
  ${caloriesInputStyles}
  grid-area: maxCaloriesInput;
`

// Labels
export const caloriesLabelStyles = css`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Lora};
  filter: drop-shadow(0 2px 2px black);
  font-weight: bold;
  ${media.phone} {
    font-size: 2.2rem;
  }
  ${media.desktop} {
    font-size: 2.5rem;
  }
`

export const MinCaloriesLabel = styled.label`
  ${caloriesLabelStyles}
  grid-area: minCaloriesLabel;
`

export const MaxCaloriesLabel = styled.label`
  grid-area: maxCaloriesLabel;
  ${caloriesLabelStyles}
`

/* Exclude Ingredients */
export const ExcludeWrapper = styled.section`
  display: grid;
  grid-template-areas:
    'excludeLabel'
    'excludeInput'
    'excludeError'
    'excludeIngredients';
  grid-template-rows: 1fr 2fr 1fr 2fr;
  justify-items: center;
  align-items: center;
  height: 50%;
  width: 100%;
`

export const ExcludeLabel = styled.label`
  grid-area: excludeLabel;
  color: ${({ theme }) => theme.colors.Orange};
  font-family: ${({ theme }) => theme.fonts.Lora};
  filter: drop-shadow(0 2px 2px black);
  font-size: 4rem;
  font-weight: bold;
`

export const ExcludeInputWrapper = styled.section`
  grid-area: excludeInput;
  position: relative;
  overflow: hidden;
  ${media.tablet} {
    height: 60%;
    width: 100%;
  }
  ${media.desktop} {
    width: 90%;
  }
`

export const ExcludeInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.7rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Gray};
  background-color: ${({ theme }) => theme.colors.Black};
  border: 2px solid ${({ theme }) => theme.colors.Brown};
  transition: all 0.3s;
  border-radius: 1rem;
  padding-left: 1rem;
  ${media.phone} {
    padding-left: 2rem;
    font-size: 2rem;
  }
  ${media.desktop} {
    border-radius: 0;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.Gray};
  }
  &:focus {
    outline: none;
    box-shadow: 0 5px 5px black;
  }
`

export const IngredientAddButton = styled.button`
  ${media.tablet} {
    top: 50%;
    left: 93.5%;
    height: 98%;
    width: 13%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border: none;
    border-left: 2px solid ${({ theme }) => theme.colors.Brown};
    transition: all 0.3s;
    position: absolute;
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.Orange};
    cursor: pointer;
    &:hover {
      background-color: rgba(221, 114, 48, 0.1);
      filter: drop-shadow(0 2px 2px black);
    }
    &:focus {
      outline: none;
    }
  }
  ${media.desktop} {
    left: 95.5%;
    height: 98%;
    width: 9%;
  }
  ${media.custom(1600)} {
    left: 96.5%;
    width: 7%;
  }
`

export const ExcludeIngredientsWrapper = styled.ul`
  height: 100%;
  width: 100%;
  grid-area: excludeIngredients;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`

export const IngredientWrapper = styled.li`
  height: 35%;
  min-width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.Brown};
  box-shadow: 0 0.3rem 0.4rem black;
  ${media.desktop} {
    min-width: 8%;
  }
  ${media.custom(1600)} {
    min-width: 7%;
  }
`

export const Ingredient = styled.h2`
  margin: 0 0.2rem;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.Orange};
  filter: drop-shadow(0 2px 2px black);
  font-weight: bold;
  text-transform: capitalize;
`

export const IngredientRemoveButton = styled.button`
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  &:focus {
    outline: none;
  }
`

/*  Error Messages */
export const CharacterErrorMessage = styled.span<{
  shouldShowErrorCharacters: boolean
}>`
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.LightRed};
  filter: drop-shadow(0 2px 2px black);
  font-weight: bold;
  letter-spacing: 0.2rem;
  top: 110%;
  position: absolute;
  visibility: hidden;
  transform: translateY(-0.5rem);
  transition: 0.3s;
  ${media.custom(400)} {
    font-size: 1.5rem;
  }
  ${media.phone} {
    font-size: 2rem;
  }
  ${media.tablet} {
    font-size: 2rem;
    top: 120%;
  }
  ${media.desktop} {
    top: 130%;
    font-size: 2.5rem;
  }
  ${(props) =>
    props.shouldShowErrorCharacters &&
    css`
      visibility: visible;
      transform: translateY(0);
    `};
`

export const CaloriesErrorMessage = styled.span<{
  shouldShowCaloriesError: boolean
}>`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.LightRed};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  filter: drop-shadow(0 2px 2px black);
  font-weight: bold;
  letter-spacing: 0.2rem;
  visibility: hidden;
  transform: translateY(-0.5rem);
  grid-area: caloriesErrorMessage;
  transition: 0.3s;
  ${media.custom(400)} {
    font-size: 1.3rem;
  }
  ${media.phone} {
    font-size: 1.7rem;
  }
  ${media.tablet} {
    font-size: 2rem;
    align-self: end;
  }
  ${media.desktop} {
    font-size: 2.2rem;
    align-self: auto;
  }
  ${media.custom(1600)} {
    font-size: 2.5rem;
    align-self: auto;
  }
  ${(props) =>
    props.shouldShowCaloriesError &&
    css`
      visibility: visible;
      transform: translateY(0);
    `};
`

export const ExcludeErrorMessage = styled.span<{
  shouldShowIngredientsError: boolean
}>`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.LightRed};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  filter: drop-shadow(0 2px 2px black);
  font-weight: bold;
  letter-spacing: 0.2rem;
  visibility: hidden;
  transform: translateY(-0.5rem);
  grid-area: excludeError;
  transition: 0.3s;
  ${media.custom(400)} {
    font-size: 1.3rem;
  }
  ${media.phone} {
    font-size: 1.7rem;
  }
  ${media.tablet} {
    font-size: 2rem;
  }
  ${media.desktop} {
    font-size: 2.2rem;
  }
  ${media.custom(1600)} {
    font-size: 2.5rem;
  }
  ${(props) =>
    props.shouldShowIngredientsError &&
    css`
      visibility: visible;
      transform: translateY(0);
    `};
`
