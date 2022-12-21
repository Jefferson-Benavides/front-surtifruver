import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Link, NavLink, useParams } from 'react-router-dom';
import { findProductoById, guardarProducto, listaProductos } from '../server/Server';

const CrearProducto = () => {

    const { id } = useParams();

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
        listaProductos();
    }, [id]);

    function handleChange({ target }) {
        setProducto({
            ...producto,
            [target.name]: target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const resp = await guardarProducto(producto);
        if (id !== undefined) {
            alert(resp);

        } else {
            alert(resp);
        }
        returnToAdminProductos();
    };

    const [disabled, setDisabled] = useState(false);

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
                        placeholder='ej. 12'
                        value={producto.id}
                        onChange={handleChange}
                        disabled={disabled}
                        />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="nombre"
                        placeholder='ej. Peras'
                        onChange={handleChange}
                        value={producto.nombre}
                        disabled={disabled}
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
                        disabled={disabled}
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
                        disabled={disabled}
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
                        disabled={disabled}
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
                        disabled={disabled}
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
                        disabled={disabled}
                    />
                </Form.Group>
                <Button disabled={disabled} variant="outline-primary" type="submit">
                    {id !== undefined ? "Actualizar" : "Guardar"}
                </Button>{' '}
                    <Button
                        hidden={!disabled}
                        variant="outline-warning"
                        onClick={() => setDisabled(!disabled)}
                    >
                    Editar
                </Button>
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