import { recipesData } from 'data'
import { Spinner } from 'components/Spinner/index'
import {
  RecipesMain,
  RecipesSection,
  RecipesHeading,
  LoadMoreSpinnerSection,
} from './styles'
import { Recipe as RecipeComponent } from '.'

export default {
  component: RecipeComponent,
  title: 'pages/Recipes',
}

export const RecipesPage = () => (
  <RecipesMain>
    <RecipesHeading>456 Results</RecipesHeading>
    <RecipesSection>
      {recipesData.map((recipe) => (
        <RecipeComponent recipe={recipe} key={recipe.uri} />
      ))}
    </RecipesSection>
  </RecipesMain>
)

export const RecipesPageWithLoadMoreSpinner = () => (
  <RecipesMain>
    <RecipesHeading>456 Results</RecipesHeading>
    <RecipesSection>
      {recipesData.map((recipe) => (
        <RecipeComponent recipe={recipe} key={recipe.uri} />
      ))}
    </RecipesSection>
    <LoadMoreSpinnerSection>
      <Spinner isLoadMoreSpinner />
    </LoadMoreSpinnerSection>
  </RecipesMain>
)
