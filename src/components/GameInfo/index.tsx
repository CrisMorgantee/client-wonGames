import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import formatPrice from 'utils/format-price'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ description, price, title }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black">
        {title}
      </Heading>

      <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <Button size="large" icon={<AddShoppingCart />}>
          Add to Cart
        </Button>
        <Button size="large" icon={<FavoriteBorder />} minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
