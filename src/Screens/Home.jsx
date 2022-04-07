import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import mujeres from '../assets/mujeresconductoras.webp';
import userInfo from '../Reducer/LoginRegistro';
import './Home.css';
import { Button, Col, Container, Row } from "react-bootstrap";


export default function Home() {




  return (
    <div className="home">

      <Container>

        <h1 className='title shadow-lg p-3 text-center rounded '> Her-Way </h1>
        <Row className="words mt-5">
          <Col lg={5} md={6} sm={12} className="box p-5 pb-5 m-auto shadow-lg rounded-lg text-center">

            <h2 className='shadow-sm .text-secondary mt-5 p-3 text-center rounded'> ¡Bienvenida! </h2>

            <h3 className='mt-5  text-center rounded' > ¿Eres pasajera? </h3>
            <Link to="/login">
              <Button type="button" class="btn btn-block"> Iniciar sesión </Button>
            </Link>

            <h3 className='mt-3 text-center rounded' > ¿Eres conductora? </h3>
            <Link to='/loginConductora'  >
              <Button type="button" class="btn btn-block $purple-300"> Iniciar sesión </Button>
            </Link>

          </Col>
          <h6 className="lema mt-5 p-5 text-center text-white ">Tu seguridad es lo más importante.</h6>
        </Row>

      </Container>
    </div>
  )
}
