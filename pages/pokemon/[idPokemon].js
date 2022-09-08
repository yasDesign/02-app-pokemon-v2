import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import React, { useEffect, useState } from "react";
import pokeApi from "../../api/pokeApi";
import Layout from "../../components/layout/Layout";
import { existInFavorite, setLocalStorage } from "../../utils/localFavorites";

const DetailPokemon = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    setIsFavorite(existInFavorite(pokemon.id));
  }, []);

  const addFavorites = () => {
    setLocalStorage(pokemon.id);
    setIsFavorite(!isFavorite);

    if (isFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <>
      <Layout title={`Pokemon- ${pokemon.name}`}>
        <Grid.Container gap={2}>
          <Grid xs={5}>
            <Card>
              <Card.Body>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={7}>
            <Card>
              <Card.Header
                css={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  bordered
                  color="primary"
                  auto
                  onClick={addFavorites}
                  ghost={!isFavorite}
                >
                  {isFavorite ? "remove favorites" : "Add favorites"}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text h2>{pokemon.name}</Text>
                <Text b>#{pokemon.id}</Text>
                <Row>
                  <Card.Image
                    src={pokemon.sprites.back_default}
                    width={200}
                    height={200}
                  />
                  <Card.Image
                    src={pokemon.sprites.front_default}
                    width={200}
                    height={200}
                  />
                  <Card.Image
                    src={pokemon.sprites.back_shiny}
                    width={200}
                    height={200}
                  />
                  <Card.Image
                    src={pokemon.sprites.front_shiny}
                    width={200}
                    height={200}
                  />
                </Row>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};
export const getStaticPaths = async (ctx) => {
  return {
    paths: [...Array(151)].map((item, id) => ({
      params: { idPokemon: `${id + 1}` },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await pokeApi.get(`/pokemon/${params.idPokemon}`);

  return {
    props: { pokemon: data },
  };
};
export default DetailPokemon;
