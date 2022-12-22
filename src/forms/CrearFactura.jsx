import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Link, NavLink, useParams } from 'react-router-dom';
import { findFacturaById, listaFacturas } from '../server/Server';

const CrearFactura = () => {

    const { id } = useParams();

    const [factura, setFactura] = useState(
        {
            id: "",
            nombreCompleto: "",
            fechaCompra: "",
            productosComprados: [
                {
                    idProducto: "",
                    nombre: "",
                    cantidad: 0,
                    precio: 0
                }
            ],
            subtotal: 0
        }
    );


    useEffect(() => {
        if (id !== undefined) {
            setDisabled(true)
            findFacturaById(id).then(
                res => { setFactura(res) }
            )
        }
        listaFacturas();
    }, [id]);

    function handleChange({ target }) {
        setFactura({
            ...factura,
            [target.name]: target.value
        })
    }

    const [disabled, setDisabled] = useState(false);

    return (
        <Container className='container-form-factura'>
            <h1>  {id !== undefined ? "Detalle de factura " + id : "Agregar nueva factura"}  </h1>
            <Form className='my-3'>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label className='lbl-form-bold'>Id: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="id"
                        placeholder='ej. 12'
                        value={factura.id}
                        onChange={handleChange}
                        disabled={disabled}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label className='lbl-form-bold'>Nombre: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="nombreCompleto"
                        placeholder='ej. Peras'
                        onChange={handleChange}
                        value={factura.nombreCompleto}
                        disabled={disabled}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label className='lbl-form-bold'>Fecha de la compra: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder='ej. Frutas'
                        name="fechaCompra"
                        onChange={handleChange}
                        value={factura.fechaCompra}
                        disabled={disabled}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label className='lbl-form-bold'>Listado productos: </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        required
                        name="subtotal"
                        onChange={handleChange}
                        value={factura.productosComprados.map(
                            p => p.nombre + ': ' + p.cantidad + ' x ' + p.precio + '\n'
                        )}
                        disabled={disabled}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label className='lbl-form-bold'>Subtotal: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="subtotal"
                        onChange={handleChange}
                        value={factura.subtotal}
                        disabled={disabled}
                    />
                </Form.Group>
                <Container>
                    <Row className="justify-content-sm-end">
                        <Col xs lg='2'>
                        </Col>
                        <Col xs lg='2'>
                        </Col>
                        <Col xs lg='2'>
                            <NavLink to='/admin/facturas'>
                                <Button variant="outline-secondary">
                                    Atrás
                                </Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>

            </Form>
        </Container>
    );
};

export default CrearFactura;