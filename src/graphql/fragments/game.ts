import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    id
    name
    slug
    cover {
      url
    }
    platforms {
      name
    }
    categories {
      name
    }
    developers {
      name
    }
    price
  }
`
