import React from 'react'
import Image from 'next/image'
import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'


const FavoriteCardPokemon = ({id}) => {
  const router=useRouter()
  const goDetail=()=>{
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid  xs={6} md={3} lg={2} onClick={goDetail}>
        <Card isHoverable isPressable>
          <Card.Body>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={"100%"} height={220}/>
          </Card.Body>
        </Card>
      </Grid>
  )
}

export default FavoriteCardPokemon