import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import Heading from '~/components/heading/heading.vue'

test('There should be a link with notes text rendered', () => {
  render(Heading, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })
  expect(screen.getByText('Notes')).toBeInTheDocument()
})
