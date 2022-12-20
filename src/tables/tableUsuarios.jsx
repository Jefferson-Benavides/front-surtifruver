import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { eliminarUsuariosById, listaUsuarios } from '../server/Server';


const tableUsuarios = () => {

    const [usuarios, setProductos] = useState([]);

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

    async function deleteUsuariosById(id) {
        let result = window.confirm("¿Está seguro que desea eliminar el producto?");
        if (result) {
            const response = await eliminarUsuariosById(id);
            alert(response);
            setUsuarios(Usuarios.filter(Usuarios => Usuarios.id != id))
        }
    }

    return (
        <Container>
            <Container className='header-listas'>
                <h1>Usuarios</h1>
                <Link to='/nuevo-producto'>
                <Button variant='success'>Agregar Usuarios</Button>
                </Link>
            </Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>NombreCompleto</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Usuarios.map(Usuarios => (
                            <tr key={Usuarios.id}>
                                <td>{Usuarios.id}</td>
                                <td>{Usuarios.nombrecompleto}</td>
                                <td>{Usuarios.password}</td>
                                <td>{Usuarios.email}</td>
                                <td>{Usuarios.rol}</td>
                                {/* <td><Link to={`/admin/producto/detalles/id`}>Ver detalle</Link></td> */}
                                <td><Link to={`/admin/Usuarios/detalles/${Usuarios.id}`}>Ver detalle</Link></td>
                                <td><Button variant='outline-danger' onClick={() => deleteUsuariosById(Usuarios.id)}>Eliminar</Button></td>
                                {/* <td> <Link to={`/producto/${producto.id}`}>Ver detalle</Link></td>
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