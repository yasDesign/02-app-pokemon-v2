import pokeApi from "../api/pokeApi"

const getPokemonsData=async (nameOrId)=>{
    const {data}=await pokeApi.get(`/pokemon/${nameOrId}`)
    const pokemon={
      id:data.id,
      name:data.name,
      sprites:data.sprites
    }
    return pokemon
}
export {getPokemonsData}