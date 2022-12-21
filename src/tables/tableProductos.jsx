import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { eliminarProductoById, listaProductos } from '../server/Server';


const tableProductos = () => {

    const [productos, setProductos] = useState([]);

    async function cargarProductos() {
        try {
            const res = await listaProductos();
            setProductos(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        cargarProductos();
    }, []);

    async function deleteProductoById(id) {
        let result = window.confirm("¿Está seguro que desea eliminar el producto?");
        if (result) {
            const response = await eliminarProductoById(id);
            alert(response);
            setProductos(productos.filter(producto => producto.id != id))
        }
    }

    return (
        <Container>
            <Container className='header-listas'>
                <h1>Productos</h1>
                <Link to='/nuevo-producto'>
                <Button variant='success'>Agregar producto</Button>
                </Link>
            </Container>
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
                                <td><Link to={`/admin/productos/detalles/${producto.id}`}>Ver detalle</Link></td>
                                <td><Button variant='outline-danger' onClick={() => deleteProductoById(producto.id)}>Eliminar</Button></td>
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