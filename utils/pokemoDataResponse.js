import pokeApi from "../api/pokeApi"

const getPokemonsData=async (nameOrId)=>{
  // validar que exista pokemon
  try{
    const {data}=await pokeApi.get(`/pokemon/${nameOrId}`)
    const pokemon={
      id:data.id,
      name:data.name,
      sprites:data.sprites
    }
    return pokemon
  }catch(error){
    return null
  }
    
}
export {getPokemonsData}