import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { eliminarUsuarioById, listaUsuarios } from '../server/Server';


const tableUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    async function cargarUsuarios() {
        try {
            const res = await listaUsuarios();
            setUsuarios(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        cargarUsuarios();
    }, []);

    async function deleteUsuarioById(id) {
        let result = window.confirm("¿Está seguro que desea eliminar el usuario?");
        if (result) {
            const response = await eliminarUsuarioById(id);
            alert(response);
            setUsuarios(usuarios.filter(usuario => usuario.id != id))
        }
    }

    return (
        <Container>
            <Container className='header-listas'>
                <h1>Usuarios</h1>
                <Link to='/nuevo-usuario'>
                <Button variant='success'>Agregar usuarios</Button>
                </Link>
            </Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombreCompleto}</td>
                                <td>{usuario.password}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.rol}</td>
                                <td><Link to={`/admin/usuarios/detalles/${usuario.id}`}>Ver detalle</Link></td>
                                <td><Button variant='outline-danger' onClick={() => deleteUsuarioById(usuario.id)}>Eliminar</Button></td>
                                {/* <td> <Link to={`/usuario/${usuario.id}`}>Ver detalle</Link></td>
                                <td><Button variant='outline-danger'>Eliminar</Button></td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default tableUsuarios;