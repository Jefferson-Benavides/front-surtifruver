import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import useGetProducts from '../hooks/useGetProducts';
import { Link, useParams } from 'react-router-dom';
import { findProductoById } from '../server/Server';


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

    const [disabled, setDisabled] = useState(false);

    return (
        <Container>
            <h1>  {id !== undefined ? "Detalle de producto " + id : "Agregar nuevo producto"}  </h1>
            <Form>
                <Form.Group>
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
                <Form.Group className='mb-3' controlId="formBasicEmail">
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
                <Form.Group className='mb-3'>
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
                <Form.Group className='mb-3'>
                    <Form.Label>Precio: </Form.Label>
                    <Form.Control
                        type="tel"
                        required
                        name="precio"
                        onChange={handleChange}
                        value={producto.precio}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Inventario: </Form.Label>
                    <Form.Control
                        type="tel"
                        required
                        name="inventario"
                        onChange={handleChange}
                        value={producto.inventario}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="descripcion"
                        onChange={handleChange}
                        value={producto.descripcion}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
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
                <Button variant="outline-secondary">
                    Atrás
                </Button>
            </Form>
        </Container>
    );
};

export default CrearProducto;