import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

const CardPokemon = ({pokemon}) => {
    const router=useRouter()
    const goDetail=()=>{
        router.push(`/name/${pokemon.name}`)
    } 

    return (
    <Grid xs={6} md={3} lg={2} xl={1} onClick={goDetail}>
        <Card isPressable isHoverable>
          <Card.Body>
            <Card.Image src={pokemon.img} width="100%" heigth={140} alt={`Imagen of ${pokemon.name}`} />
          </Card.Body>
          <Card.Footer>
            <Row justify='space-between' align='center'>
              <Text h4>{pokemon.name}</Text>
              <Text b>#{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card>          
    </Grid>
  )
}

export default CardPokemon