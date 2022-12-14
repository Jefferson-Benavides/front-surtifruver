const BASE_URL = 'http://localhost:3005/';

export async function listaProductos(){
    const res = await fetch(BASE_URL + 'producto/all', options);
    return await res.json();
}

export async function guardarProducto(){
    const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(producto)
    }
    const res = await fetch(BASE_URL + 'producto/save', options);
    return await res.json();
}

export async function eliminarProductoById(id){
    const options = {
        method: 'DELETE'}
    const res = await fetch(BASE_URL + 'producto/save', options);
    return await res.json();
}