

export async function getAllProductos(buscar){

    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ofertas"+buscar)
    .then(res=>res.json())
}
export function getByIdProductos(id){
    return fetch("https://api.mercadolibre.com/items/"+id)
    .then(res=>res.json())
}