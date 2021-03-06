import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'

const props = {
  title: 'Population Zero',
  slug: 'population-zero',
  developer: 'Rocket',
  img: '/zero',
  price: 235
}

describe('<GameCard />', () => {
  it('should render GameCard', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()
  })

  it('should render a price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('$235.00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={200} />)

    expect(screen.getByText('$235.00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('$200.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true ', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/Remove from Wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked ', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="20% OFF"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% OFF/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
