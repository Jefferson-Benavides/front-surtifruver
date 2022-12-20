const BASE_URL = 'http://129.213.20.238:8080/';

export async function listaUsuarios(){
    const options = {method: 'GET'};
    const res = await fetch(BASE_URL + 'usuario/all', options);
    return await res.json();
}

export async function guardarUsuarios(usuario){
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