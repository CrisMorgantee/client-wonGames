import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameInfo from '.'

const props = {
  title: 'Game title',
  description: 'Game description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$210\.00/i)).toBeInTheDocument()
  })

  it('should render Buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
