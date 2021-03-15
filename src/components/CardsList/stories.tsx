import { Meta, Story } from '@storybook/react/types-6-0'
import cardsMock from 'components/PaymentOptions/mock'
import CardsList, { CardsListProps } from '.'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
