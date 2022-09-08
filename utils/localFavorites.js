const setLocalStorage=(id)=>{
    let favorites=JSON.parse(localStorage.getItem('favorites')|| '[]')
    if(favorites.includes(id)){
        favorites=favorites.filter(item=>item!==id)
    }else{
        favorites.push(id)
    }
    localStorage.setItem('favorites',JSON.stringify(favorites))
}

const existInFavorite=(id)=>{
    if (typeof window === 'undefined'){
        return false
    }
    let favorites=JSON.parse(localStorage.getItem('favorites')|| '[]')
    if(favorites.includes(id)){
        return true
    }
    return false
} 

const pokemonsFavorite=()=>{
    if (typeof window === 'undefined'){
        return []
    }
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}
export {setLocalStorage, existInFavorite, pokemonsFavorite}