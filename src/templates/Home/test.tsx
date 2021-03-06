import { screen } from '@testing-library/react'
import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

const props = {
  banners: bannerMock,
  newGamesTitle: 'New Games',
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGamesTitle: 'Most Popular',
  mostPopularGames: gamesMock,
  upcomingGamesTitle: 'Upcoming',
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  freeGamesTitle: 'Free Games',
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render BannerSlider and Showcase', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
