import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }
  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map((item, index) => (
              <GameCard key={index} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
