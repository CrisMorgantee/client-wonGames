import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

export const Main = styled(Container)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 26rem 1fr;
    gap: ${theme.grid.gutter};
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    svg {
      color: ${theme.colors.primary};
      width: 3.5rem;
    }
  `}
`
