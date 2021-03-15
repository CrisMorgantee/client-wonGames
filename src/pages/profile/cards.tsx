import CardsList, { CardsListProps } from 'components/CardsList'
import cardsMock from 'components/PaymentOptions/mock'
import Profile from 'templates/Profile'

export default function Cards(props: CardsListProps) {
  return (
    <Profile>
      <CardsList {...props} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}
