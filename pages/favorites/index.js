import React, { useEffect, useState } from 'react'

import Layout from '../../components/layout/Layout'
import FavoritePokemons from '../../components/ui/FavoritePokemons'
import NoFavorites from '../../components/ui/NoFavorites'
import { pokemonsFavorite } from '../../utils/localFavorites'

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(()=>{
    setFavorites(pokemonsFavorite())
  },[])
  return (
    
    <Layout title={"Pokemons- Favorites"}>
        {
          favorites.length===0?
            (<NoFavorites/>):
            (
             <FavoritePokemons pokemons={favorites}/>
            )

        }
        
    </Layout>
     
  )
}

export default FavoritesPage