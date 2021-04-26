import { screen, render } from '@testing-library/vue'
import Article from '~/components/article/article.vue'
test('should ', () => {
  render(Article, {
    props: {
      article: {
        title: 'lala',
      },
    },
  })
  screen.debug()
  expect(screen.getByText('lala')).toBeTruthy()
})
