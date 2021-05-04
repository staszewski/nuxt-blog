import { screen, render } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import Navigation from '~/components/navigation/navigation.vue'
const stubs = {
  NuxtLink: RouterLinkStub,
}
const renderNavigation = (props?: {}) => {
  render(Navigation, {
    props: {
      navigationItems: [
        { name: 'Blog', url: '/blog' },
        { name: 'About', url: '/about' },
      ],
      ...props,
    },
    stubs,
  })
}

test('renders correct amount of items', () => {
  renderNavigation()
  expect(screen.getAllByRole('listitem')).toHaveLength(2)
})

test('renders no items', () => {
  renderNavigation({ navigationItems: [] })
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
})
