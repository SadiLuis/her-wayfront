import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Login() {
  return (
      <div>
          <h1> Login  </h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Correo</Form.Label>
            <Form.Control type="email" placeholder="Correo " />
            <Form.Text className="text-muted">
              Tu información personal no sera compartida con nadie.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        
        <br/>
        <br/>
          <Button variant="primary" type="submit"  >
            Registrarse
          </Button>

        </Form>



    </div>  
  )
}
