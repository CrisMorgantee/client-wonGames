import React from 'react'
import * as S from './styled'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado!"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor sentado de frente para uma tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
