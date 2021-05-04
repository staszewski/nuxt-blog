import { screen, render, fireEvent } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import MobileNavigation from '~/components/mobile-navigation/mobile-navigation.vue'

const stubs = {
  NuxtLink: RouterLinkStub,
}

const renderMobileNavigation = () => {
  render(MobileNavigation, {
    props: {
      navigationItems: [
        { name: 'Blog', url: '/blog' },
        { name: 'About', url: '/about' },
      ],
    },
    stubs,
  })
}

test('list is not rendered by default', () => {
  renderMobileNavigation()
  expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
})

test('render list after button click', async () => {
  renderMobileNavigation()
  await fireEvent.click(screen.getByLabelText('Open menu'))
  expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
})

test('when no navigation item are passed navigation is not rendered either', () => {
  render(MobileNavigation, {
    stubs,
  })
  expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
})
