import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })

  it('should render menu with active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/me" />)

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
