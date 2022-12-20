const BASE_URL = 'http://129.213.20.238:8080/';

export async function listaUsuarios(){
    const options = {method: 'GET'};
    const res = await fetch(BASE_URL + 'usuarios/all', options);
    return await res.json();
}

export async function guardarUsuarios(Usuarios){
    const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(Usuarios)
    }
    const res = await fetch(BASE_URL + 'usuarios/save', options);
    return await res.text();
}

export async function eliminarUsuariosById(id){
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL + 'usuarios/' + id, options);
    return await res.text();
}

export async function findUsuariosById(id) {
    const res = await fetch(BASE_URL+"usuarios/"+id);
    return await res.json();
};