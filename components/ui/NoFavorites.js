import { Container, Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const NoFavorites = () => {
  return (
    <Container css={{display:'flex',flex:1, flexDirection:'column', height:'calc(100vh-100px)', alignItems:'center', justifyContent:'center',alignSelf:'center'}}>
        <Text h2>NoFavorites</Text>
        <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"} width={200} height={200} style={{ opacity:'0.3'}}/>
    </Container>
  )
}

export default NoFavorites