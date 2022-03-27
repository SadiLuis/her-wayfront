import React, {useState} from 'react';
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
    
  
    return (
      <Container>
        <Stack gap={3}>
             <button
            type="submit"
            className='btn btn-primary'
           onClick={() => signInWithRedirect(auth, googleProvider)}
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