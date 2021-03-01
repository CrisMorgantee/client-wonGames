import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Divider = styled.hr`
  ${({ theme }) => css`
    height: 0.1rem;
    border: 0;
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
    background: rgba(181, 181, 181, 0.3);

    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.xxlarge} * 2.5) auto ${theme.spacings.xxlarge};
    `}
  `}
`
