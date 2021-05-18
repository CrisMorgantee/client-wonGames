import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { QUERY_GAMES } from 'graphql/queries/games'
import apolloCache from 'utils/apolloCache'
import { renderWithTheme } from 'utils/tests/helpers'
import Games from '.'
import { fetchMoreMock, gamesMock } from './mocks'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 12 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'RimWorld',
                    slug: 'rimworld',
                    cover: {
                      url: '/uploads/rimworld_8e93acc963.jpg'
                    },
                    developers: [{ name: 'Ludeon Studios' }],
                    price: 65.99,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(await screen.findByText(/RimWorld/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })
})
