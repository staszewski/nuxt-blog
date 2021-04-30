import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import Card from '~/components/card/card.vue'

const article = {
  slug: 'my-first-blog-post',
  description: 'Description of first blog post',
  title: 'My first Blog Post',
  img: 'first-blog-post.jpg',
  alt: 'my first blog post',
  toc: [],
  body: {
    type: 'root',
    children: [
      {
        type: 'element',
        tag: 'h1',
        props: { id: 'my-first-heading' },
        children: [
          {
            type: 'element',
            tag: 'a',
            props: {
              ariaHidden: 'true',
              href: '#my-first-heading',
              tabIndex: -1,
            },
            children: [
              {
                type: 'element',
                tag: 'span',
                props: { className: ['icon', 'icon-link'] },
                children: [],
              },
            ],
          },
          { type: 'text', value: 'My first heading' },
        ],
      },
      { type: 'text', value: '\n' },
      {
        type: 'element',
        tag: 'p',
        props: {},
        children: [
          {
            type: 'text',
            value: 'Welcome to my first blog post using content module',
          },
        ],
      },
    ],
  },
  dir: '/articles',
  path: '/articles/my-first-blog-post',
  extension: '.md',
  createdAt: '2021-04-26T07:48:54.241Z',
  updatedAt: '2021-04-30T09:00:01.322Z',
}

test('title and description are passed correctly', () => {
  const { container } = render(Card, {
    props: { article },
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })
  const heading = container.querySelector('h3')
  expect(heading).toHaveTextContent(article.title)

  const description = container.querySelector('p')
  expect(description).toHaveTextContent(article.description)
})

test('renders defaults', () => {
  const { container } = render(Card, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })
  const heading = container.querySelector('h3')
  expect(heading).toHaveTextContent('Something went wrong')

  const description = container.querySelector('p')
  expect(description).toHaveTextContent('Please go to main page')
})
