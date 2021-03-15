import OrdersList, { OrdersListProps } from 'components/OrdersList'
import ordersMock from 'components/OrdersList/mock'
import Profile from 'templates/Profile'

export default function Cards(props: OrdersListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}
