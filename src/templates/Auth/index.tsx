import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ children, title }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Logo id="banner" />
          <div>
            <Heading size="huge">All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>Won</strong> is the best and most complete game platform
            </S.Subtitle>
          </div>
          <S.Footer>Won Games 2020 Todos os direitos reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Logo id="content" color="black" size="large" />
          <Heading color="black" lineLeft lineColor="secondary">
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
