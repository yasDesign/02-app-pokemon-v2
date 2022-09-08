import React from 'react'
import { Grid } from '@nextui-org/react'

import FavoriteCardPokemon from './FavoriteCardPokemon'

const FavoritePokemons = ({pokemons}) => {
  return (
    <Grid.Container gap={2}>
    {pokemons.map(id=>(
      <FavoriteCardPokemon id={id}/>
    )) }
  </Grid.Container>
  )
}

export default FavoritePokemons