import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap';
import useGetProducts from '../hooks/useGetProducts';
import { Link, NavLink, useParams } from 'react-router-dom';
import { findProductoById, guardarProducto } from '../server/Server';


const API = 'http://localhost:8080/producto/all';

const CrearProducto = () => {

    const { id } = useParams();

    const productos = useGetProducts(API);

    const [producto, setProducto] = useState(
        {
            id: "",
            nombre: "",
            categoria: "",
            precio: 0,
            inventario: 0,
            descripcion: "",
            urlImage: ""
        }
    );


    useEffect(() => {
        if (id !== undefined) {
            setDisabled(true)
            findProductoById(id).then(
                res => { setProducto(res) }
            )
        }
    }, [id]);

    const handleChange = ({ target }) => {
        setProducto({
            ...producto,
            [target.name]: target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const resp = await guardarProducto(producto);
        if (id!==undefined) {
        alert("Producto actualizado: " + resp.id);
    }else{
        alert("Producto registrado exitosamente: " + resp.id);
    }
    };

    const [disabled, setDisabled] = useState(false);

    function returnToAdminProductos() {
        NavLink()
        console.log('Botón atrás')

    };

    return (
        <Container className='container-form-producto'>
            <h1>  {id !== undefined ? "Detalle de producto " + id : "Agregar nuevo producto"}  </h1>
            <Form className='my-3' onSubmit={handleSubmit}>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>Id: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="id"
                        placeholder='ej. Peras'
                        onChange={handleChange}
                        value={producto.id}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3' controlId="formBasicEmail">
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="id"
                        placeholder='ej. Peras'
                        onChange={handleChange}
                        value={producto.nombre}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>Categoría: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder='ej. Frutas'
                        name="categoria"
                        onChange={handleChange}
                        value={producto.categoria}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>Precio: </Form.Label>
                    <Form.Control
                        type="tel"
                        required
                        name="precio"
                        onChange={handleChange}
                        value={producto.precio}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>Inventario: </Form.Label>
                    <Form.Control
                        type="tel"
                        required
                        name="inventario"
                        onChange={handleChange}
                        value={producto.inventario}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="descripcion"
                        onChange={handleChange}
                        value={producto.descripcion}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>Imagen: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="urlImage"
                        onChange={handleChange}
                        value={producto.urlImage}
                    />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Guardar
                </Button>{' '}
                <NavLink to='/admin/productos'>

                <Button variant="outline-secondary">
                    Atrás
                </Button>

                </NavLink>
            </Form>
        </Container>
    );
};

export default CrearProducto;