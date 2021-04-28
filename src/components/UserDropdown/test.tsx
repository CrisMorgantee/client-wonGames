import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Cristiano" />)

    expect(screen.getByText(/cristiano/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Cristiano" />)

    // open menu
    userEvent.click(screen.getByText(/cristiano/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
