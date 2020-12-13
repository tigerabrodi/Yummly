import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as PanSVG } from 'assets/fried.svg'
import { Search } from '@styled-icons/bootstrap'
import { media } from 'theme/media'
import { wrapperStyles } from 'styles'

/* Wrappers */
export const SearchWrapper = styled.div`
  ${wrapperStyles}
`

export const SearchInnerWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'search'
    'search';
  justify-items: center;
  align-items: center;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90%;
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

export const TitleWrapper = styled.div`
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
  justify-content: space-evenly;
`

export const QueryWrapper = styled.div`
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
    height: 15%;
    width: 98%;
  }
  ${media.desktop} {
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
  font-size: 1.4rem;
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
  }
  ${media.tablet} {
    left: 87%;
  }
  ${media.desktop} {
    left: 88%;
    top: 75%;
    font-size: max(1.5rem, 1vw);
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
    max-width: 13rem;
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
export const CaloriesWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'minCaloriesLabel maxCaloriesLabel'
    'minCaloriesInput maxCaloriesInput'
    'caloriesErrorMessage caloriesErrorMessage';
  grid-template-rows: auto 1fr;
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
    height: 30%;
  }
  ${media.desktop} {
    height: 35%;
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
  max-height: 4rem;
  ${media.phone} {
    height: 80%;
    width: 35%;
    max-height: 4rem;
  }
  ${media.tablet} {
    height: 70%;
    width: 20%;
    max-height: 4rem;
  }
  ${media.desktop} {
    max-width: 12rem;
    max-height: 5rem;
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

export const CaloriesErrorMessage = styled.span`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.LightRed};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  filter: drop-shadow(0 2px 2px black);
  font-weight: bold;
  letter-spacing: 0.2rem;
  grid-area: caloriesErrorMessage;
  ${media.custom(400)} {
    font-size: 1.3rem;
  }
  ${media.phone} {
    font-size: 1.7rem;
  }
  ${media.tablet} {
    font-size: 2.2rem;
  }
  ${media.desktop} {
    font-size: 2.5rem;
  }
`

/*  Error */
//  Animation
const showError = keyframes`
    100% {
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, -50%); 
    }
`

// Toast
export const ErrorToast = styled.div<{ isError: boolean }>`
  position: absolute;
  display: none;
  visibility: hidden;
  opacity: 0;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 60%;
  background-color: ${({ theme }) => theme.colors.DarkRed};
  top: 165%;
  left: 45%;
  transform: translate(-50%, -80%);
  z-index: 3;
  border-radius: 5px;
  box-shadow: 0 0 3px black;
  ${media.tablet} {
    height: 90%;
    top: 195%;
  }
  ${(props) =>
    props.isError &&
    css`
      display: flex;
      animation: ${showError} 0.3s forwards;
    `};
  &::after {
    content: '';
    left: 40.2%;
    width: 20%;
    height: 50%;
    background-color: ${({ theme }) => theme.colors.DarkRed};
    position: absolute;
    transform: translate(-50%, -50%) skewY(-25deg);
    top: 26%;
    z-index: -1;
    ${media.tablet} {
      left: 43.2%;
      width: 15%;
    }
    ${media.desktop} {
      left: 46.2%;
      width: 10%;
    }
  }
  &::before {
    content: '';
    width: 20%;
    height: 50%;
    right: 20%;
    background-color: ${({ theme }) => theme.colors.DarkRed};
    position: absolute;
    transform: translate(-50%, -50%) skewY(25deg);
    top: 26%;
    z-index: -1;
    ${media.tablet} {
      width: 15%;
      right: 27%;
    }
    ${media.desktop} {
      width: 10%;
      right: 34%;
    }
  }
`

export const ErrorText = styled.span`
  font-size: min(2rem, 3.7vw);
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  ${media.tablet} {
    font-size: 2rem;
  }
  ${media.desktop} {
    font-size: max(2rem, 1.5vw);
  }
`
