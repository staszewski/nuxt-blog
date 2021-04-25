import { screen, render } from '@testing-library/vue'
import Article from '~/components/article/article.vue'
test('should ', () => {
  render(Article, {
    props: {
      title: 'lala',
    },
  })
  expect(screen.getByText('lala')).toBeTruthy()
})
