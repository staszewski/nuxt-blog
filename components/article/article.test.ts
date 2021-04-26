import { screen, render } from '@testing-library/vue'
import Article from '~/components/article/article.vue'

test('title and description are rendered', () => {
  const title = 'Test title'
  const description = 'Test description'
  render(Article, {
    props: {
      article: {
        title,
        description,
      },
    },
  })
  expect(screen.getByText(title)).toBeInTheDocument()
  expect(screen.getByText(description)).toBeInTheDocument()
})

test('default props test', () => {
  render(Article)
  expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  expect(screen.getByText('Please go to main page')).toBeInTheDocument()
})
