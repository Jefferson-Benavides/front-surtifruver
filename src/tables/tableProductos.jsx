import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useGetProducts from '../hooks/useGetProducts';

const API = 'http://localhost:8080/producto/all';

const tableProductos = () => {

    const productos = useGetProducts(API);

    return (
        <Container>
            <h1>Productos</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Inventario</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                        <th>Detalle</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.categoria}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.inventario}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.urlImage}</td>
                                {/* <td><Link to={`/admin/producto/detalles/id`}>Ver detalle</Link></td> */}
                                <td><Link to={`/admin/producto/detalles/${producto.id}`}>Ver detalle</Link></td>
                                <td><Button variant='outline-danger'>Eliminar</Button></td>
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

export default tableProductos;