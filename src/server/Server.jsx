const BASE_URL = 'http://129.213.20.238:8080/';

export async function listaUsuarios(){
    const options = {method: 'GET'};
    const res = await fetch(BASE_URL + 'usuario/all', options);
    return await res.json();
}

export async function guardarUsuario(usuario){
    const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(usuario)
    }
    const res = await fetch(BASE_URL + 'usuario/save', options);
    return await res.text();
}

export async function eliminarUsuarioById(id){
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL + 'usuario/' + id, options);
    return await res.text();
}

export async function findUsuarioById(id) {
    const res = await fetch(BASE_URL+"usuario/"+id);
    return await res.json();
};

export async function listaProductos(){
    const options = {method: 'GET'};
    const res = await fetch(BASE_URL + 'producto/all', options);
    return await res.json();
}

export async function guardarProducto(producto){
    const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(producto)
    }
    const res = await fetch(BASE_URL + 'producto/save', options);
    return await res.text();
}

export async function eliminarProductoById(id){
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL + 'producto/' + id, options);
    return await res.text();
}

export async function findProductoById(id) {
    const res = await fetch(BASE_URL+"producto/"+id);
    return await res.json();
};

export async function listaFacturas(){
    const options = {method: 'GET'};
    const res = await fetch(BASE_URL + 'factura/all', options);
    return await res.json();
};

export async function guardarFactura(factura){
    const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(factura)
    }
    const res = await fetch(BASE_URL + 'factura/save', options);
    return await res.text();
};

export async function findFacturaById(id) {
    const res = await fetch(BASE_URL+"factura/"+id);
    return await res.json();
};

export async function eliminarFacturaById(id){
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL + 'factura/' + id, options);
    return await res.text();
}