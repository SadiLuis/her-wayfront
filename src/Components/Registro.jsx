import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function Registro() {
  return (
  <Form>
    <Row>
      <Col xs={7}>
        <Form.Control placeholder="Correo" />
      </Col>
      <Col>
        <Form.Control placeholder="Contraseña" />
      </Col>
      <Col>
        <Form.Control placeholder="Nombre" />
      </Col>
      <Col>
        <Form.Control placeholder="Provincia" />
      </Col>
      <Col>
        <Form.Control placeholder="Localidad" />
      </Col>
      <Col>
        <Form.Control placeholder="Telefono" />
      </Col>
    </Row>
  </Form>
  )
}
