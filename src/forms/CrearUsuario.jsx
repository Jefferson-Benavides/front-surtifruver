import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { findUsuarioById, guardarUsuario, listaUsuarios } from '../server/Server';

const CrearUsuario= () => {

    const { id } = useParams();

    const [usuario, setUsuario] = useState(
        {
            id: "",
            nombreCompleto: "",
            password: "",
            email: "" ,
            rol:""
        }
    );

    
    useEffect(() => {
        if (id !== undefined) {
            setDisabled(true)
            findUsuarioById(id).then(
                res => { setUsuario(res) }
            )
        }
        listaUsuarios();
    }, [id]);

    function handleChange({ target }) {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const resp = await guardarUsuario(usuario);
        if (id !== undefined) {
            alert(resp);
        } else {
            alert(resp);
        }
        returnToAdminUsuarios();
    };

    const [disabled, setDisabled] = useState(false);

    return (
        <Container className='container-form-Usuarios'>
            <h1>  {id !== undefined ? "Detalle de Usuario " + id : "Agregar nuevo Usuario"}  </h1>
            <Form className='my-3' onSubmit={handleSubmit}>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>Id: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="id"
                        placeholder='ej. 12'
                        value={usuario.id}
                        onChange={handleChange}
                        disabled={disabled}
                        />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>nombrecompleto: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="nombreCompleto"
                        placeholder='ej. Juan'
                        onChange={handleChange}
                        value={usuario.nombreCompleto}
                        disabled={disabled}
                        />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>password: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder='ej. Juan178'
                        name="password"
                        onChange={handleChange}
                        value={usuario.password}
                        disabled={disabled}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>email: </Form.Label>
                    <Form.Control
                        type="tel"
                        required
                        name="email"
                        onChange={handleChange}
                        value={usuario.email}
                        disabled={disabled}
                    />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>Rol: </Form.Label>
                    <Form.Control
                        type="tel"
                        required
                        name="rol"
                        onChange={handleChange}
                        value={usuario.rol}
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
                <NavLink to='/admin/Usuarios'>
                <Button variant="outline-secondary">
                        Atrás
                    </Button>
                </NavLink>
            </Form>
        </Container>
    );
};

export default CrearUsuario;