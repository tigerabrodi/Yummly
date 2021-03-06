import { useRavenyState } from 'context/RavenyContext'
import { Recipe } from 'components/Recipe'
import {
  IntersectingElementToLoadMore,
  RecipesHeading,
  RecipesMain,
  RecipesSection,
} from 'components/Recipe/styles'
import { useLocation } from 'react-router-dom'
import { useOnInfinite } from 'hooks/useOnInfinite'
import { FullPageSpinner, LoadMoreSpinner } from 'components/Spinner'
import { useOnScreen } from 'hooks/useOnScreen'
import { NoRecipesFoundMain, NoRecipesTitle, SadFace, Link } from './styles'
import { SkipToNavLink } from 'components/SkipToNavLink'
import { useHeadingFocus } from 'hooks/useHeadingFocus'

const apiURL = process.env.REACT_APP_API_URL

export const Recipes = () => {
  const { state } = useRavenyState()
  const headingToBeFocusedRef = useHeadingFocus(state.status)

  const searchParams = new URLSearchParams(useLocation().search)

  const query = searchParams.get('q') as string
  const calories = searchParams.get('calories') as string
  const excludedIngredients = searchParams.getAll('exclude') as string[]

  const hasExcludedIngredients = excludedIngredients.length > 0

  const urlObject = new URL(apiURL!)

  urlObject.searchParams.append('q', query)
  urlObject.searchParams.append('calories', calories)

  if (hasExcludedIngredients) {
    excludedIngredients.forEach((ingredient) => {
      urlObject.searchParams.append('exclude', ingredient)
    })
  }

  const { href } = urlObject

  const { isVisible, setIntersectingElement } = useOnScreen({
    threshold: 1,
  })

  const { shouldFocusOnRecipeTitle } = useOnInfinite(href, isVisible)

  if (state.status === 'loading') {
    return <FullPageSpinner loadingText="Loading recipes" />
  }

  return state.stateType === 'recipesState' && state.recipes.length > 0 ? (
    <RecipesMain id="maincontent">
      <RecipesHeading ref={headingToBeFocusedRef} tabIndex={-1}>
        <SkipToNavLink />
        {state.results} Results
      </RecipesHeading>
      <RecipesSection>
        {state.recipes.map((recipe, index) => (
          <Recipe
            recipe={recipe}
            key={recipe.id}
            shouldFocusOnTitle={shouldFocusOnRecipeTitle(index)}
          />
        ))}
      </RecipesSection>
      {state.status === 'loadingMore' ? (
        <LoadMoreSpinner />
      ) : state.hasMoreRecipes ? (
        <IntersectingElementToLoadMore ref={setIntersectingElement} />
      ) : null}
    </RecipesMain>
  ) : (
    <NoRecipesFoundMain>
      <NoRecipesTitle>No Recipes Found!</NoRecipesTitle>
      <SadFace aria-hidden="true" />
      <Link to="/search">Back To Search</Link>
    </NoRecipesFoundMain>
  )
}
