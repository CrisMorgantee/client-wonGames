import Button from 'components/Button'
import * as S from './styles'

export type HightlightProps = {
  title: string
  subtitle: string
  floatImage?: string
  backgroundImage: string
  alignment?: 'right' | 'left'
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subtitle,
  floatImage,
  backgroundImage,
  alignment = 'right',
  buttonLabel,
  buttonLink
}: HightlightProps) => {
  return (
    <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>

        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Highlight
