import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {eliminarFacturaById, eliminarProductoById, listaFacturas} from '../server/Server';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";


const tableFacturas = () => {

    const [facturas, setFacturas] = useState([]);


    async function cargarFacturas() {
        try {
            const res = await listaFacturas();
            setFacturas(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        cargarFacturas();
    }, []);

    async function deleteFacturaById(id) {
        let result = window.confirm("¿Está seguro que desea eliminar la factura?");
        if (result) {
            const response = await eliminarFacturaById(id);
            alert(response);
            setFacturas(facturas.filter(factura => factura.id != id))
        }
    }

    return (
        <Container>
            <Container className='header-listas'>
                <h1>Facturas</h1>
            </Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre de usuario</th>
                        <th>Fecha de compra</th>
                        <th>Subtotal</th>
                        <th>Detalle</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        facturas.map(factura => (
                            <tr key={factura.id}>
                                <td>{factura.id}</td>
                                <td>{factura.nombreCompleto}</td>
                                <td>{factura.fechaCompra}</td>
                                <td>{factura.subtotal}</td>
                                <td><Link to={`/admin/factura/detalles/${factura.id}`}>Ver detalle</Link></td>
                                <td><Button variant='outline-danger' onClick={() => deleteFacturaById(factura.id)}>Eliminar</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default tableFacturas;
