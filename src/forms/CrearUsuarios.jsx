import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Link, NavLink, useParams } from 'react-router-dom';
import { findUsuariosById, guardarUsuarios, listaUsuarios } from '../server/Server';

const CrearUsuarios= () => {

    const { id } = useParams();

    const [Usuarios, setUsuarios] = useState(
        {
            id: "",
            NombreCompleto: "",
            Password: "",
            Email: "" ,
            Rol:""
        }
    );

    
    useEffect(() => {
        if (id !== undefined) {
            setDisabled(true)
            findUsuariosById(id).then(
                res => { setUsuarios(res) }
            )
        }
        listaUsuarios();
    }, [id]);

    function handleChange({ target }) {
        setUsuarios({
            ...Usuarios,
            [target.name]: target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const resp = await guardarUsuarios(Usuarios);
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
                        value={Usuarios.id}
                        onChange={handleChange}
                        disabled={disabled}
                        />
                </Form.Group>
                <Form.Group className='lbl-input-grid mb-3'>
                    <Form.Label>nombrecompleto: </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="nombrecompleto"
                        placeholder='ej. Juan'
                        onChange={handleChange}
                        value={Usuarios.NombreCompleto}
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
                        value={Usuarios.Password}
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
                        value={Usuarios.Email}
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
                        value={Usuarios.Rol}
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
                        value={Usuarios.urlImage}
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

export default CrearUsuarios;