import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Stack, Container, Form, Button } from "react-bootstrap"
import {app} from '../Firebase-config';
import {
    getAuth,
    signOut,
    
    signInWithRedirect,
    GoogleAuthProvider,
  } from "firebase/auth";
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  
  const LoginConGooglePasajera = () => {

    const navigate=useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      if(auth ==true){
  
      // dispatch (login(formlogin))
  
      
      navigate('/perfilPasajera')
    }else{
      navigate('/login')
    }
  }
  
    // useEffect(() => {
    //   // Si ya está logueado que lo redireccione al dashboard
    //   if (auth==true) {
    //     navigate('/perfilPasajera')
    //   }
    // }, [auth]);
    
    return (
      <Container>
        <Stack gap={3}
        onClick={handleSubmit}>
             <button
            type="submit"
            className='btn btn-primary'
           onClick={ () => signInWithRedirect(auth, googleProvider)} 
           >
             
            
            Acceder con Google
          </button>
          <button 
            type="submit"
            className='btn btn-primary'
              onClick={()=>signOut(auth)}>Cerrar Sesión</button>
  
         
        </Stack>
      </Container>
    );
  };

  export default LoginConGooglePasajera;