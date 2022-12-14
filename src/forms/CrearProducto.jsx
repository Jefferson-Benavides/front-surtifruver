import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const CrearProducto = () => {
    return (

        //     <Form>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control type="email" placeholder="Enter email" />
        //             <Form.Text className="text-muted">
        //                 We'll never share your email with anyone else.
        //             </Form.Text>
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" placeholder="Password" />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //             <Form.Check type="checkbox" label="Check me out" />
        //         </Form.Group>
        //         <Button variant="primary" type="submit">
        //             Submit
        //         </Button>
        //     </Form>
        // );



        // <div>
        //     <h1>Crear Producto</h1>
        //     <form action="" method="post">
        //         <label htmlFor="nombre">Nombre</label>
        //         <input type="text" name='nombre' />
        //     </form>
        // </div>);

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
            <Button variant="primary" type="submit">
                Guardar
            </Button>
            <Button>
                Atrás
            </Button>
        </Form>
    );
};

export default CrearProducto;