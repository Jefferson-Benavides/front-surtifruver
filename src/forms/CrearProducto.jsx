import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';



const CrearProducto = () => {
    
    return (
        <Container>
        <Form>
            <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                    type="text"
                    required
                    name="nombre"
                    placeholder='ej. Peras'
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Categoría: </Form.Label>
                <Form.Control
                    type="text"
                    required
                    name="categoria" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Precio: </Form.Label>
                <Form.Control
                    type="tel"
                    required
                    name="precio" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Inventario: </Form.Label>
                <Form.Control
                    type="tel"
                    required
                    name="inventario" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Descripción: </Form.Label>
                <Form.Control
                    type="text"
                    required
                    name="descripcion" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Imagen: </Form.Label>
                <Form.Control
                    type="text"
                    required
                    name="urlImage" />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
                Guardar Producto
            </Button>{' '}
            <Button variant="outline-secondary">
                Atrás
            </Button>
        </Form>
        </Container>
    );
};

export default CrearProducto;