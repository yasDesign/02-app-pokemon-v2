import { Grid } from '@nextui-org/react'
import React from 'react'
import pokeApi from '../api/pokeApi'
import Layout from '../components/layout/Layout'
import CardPokemon from '../components/ui/CardPokemon'

const Home = ({pokemons}) => {
  return (
    <>
     <Layout>
      <Grid.Container gap={2}>
        {
          pokemons.map((pokemon)=>(
           <CardPokemon pokemon={pokemon} key={pokemon.id}/>
          ))
        }
      </Grid.Container>
     </Layout>
    </>
  )
}

export async function getStaticProps(context) {
  const {data}= await pokeApi.get('/pokemon?limit=151')
   const pokemons=[...Array(151)].map((item,id)=>({
    id:id+1,
    name:data.results[id].name, 
    url:data.results[id].url,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1}.svg`
  }))
  return {
    props: {pokemons}, 
  }
}

export default Home