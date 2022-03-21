import React , { useState ,useEffect} from 'react'
import {resetPassword , reloadingPage} from '../actions/Usuarios'
import {useDispatch , useSelector} from 'react-redux'
import styles from './RecoverPassword.module.css'
import {Link } from 'react-router-dom'
import { registerVersion } from 'firebase/app'
function ResetPassword() {
    const [state, setState] = useState({
        email:'example@example.com'
    })
    let expRegular = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let Result = expRegular.test(state.email)
    const recoverPass = useSelector(state => state.LoginRegisReducer.resetPass)
    const dispatch= useDispatch()
    
     useEffect(()=>{
       
      if(recoverPass.length){
        return ()=>{
         dispatch(reloadingPage(''))
     }
    }
     },[recoverPass ,dispatch,reloadingPage])

     const handleChange = (e)=>{
         setState({
             email:e.target.value
            })
            
            console.log('esto es result',Result)
            
        }
        
        const handleSubmit = async(e)=>{
            e.preventDefault()
            if(state.email === '' || state.email === 'example@example.com'){
             alert('Debes incluir un correo valido')
            }
            dispatch(resetPassword(state.email))
            
       

     }

     const handleButton =()=>{
         dispatch(reloadingPage(''))
     }


           let err = styles.none
           let errInp = styles.inputText
           if(Result){
            err = styles.none
            errInp = styles.inputText
           }else{
            err = styles.error
            errInp = styles.errorInp
           }
           
           
           return(
            <main>
           { !recoverPass.length ?
           <div className={styles.contain}>
            <form onSubmit={handleSubmit} className={styles.form}>

              <label className={styles.name} >¿Tienes problemas para iniciar sesión?</label>
              <span className={styles.span}>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.</span>
              <input className={errInp} type='text' onChange={handleChange} icon={'f'}/>
              
              <span className={err}>Introduce un correo valido</span>
              
              <input className={styles.btn} type='submit' value='Recuperar'/>

            </form>
           </div>
           : recoverPass === 'Email enviado' ? 
              <div className={styles.form}>
               <h4 className={styles.name}>{recoverPass}</h4>
               <h5 className={styles.span}>Por favor revise su casilla de correo </h5>
              <Link to='/'>
              <button>Inicio</button>
              </Link>
             </div>
            : <div className={styles.form}>
                <h4 className={styles.name}>No está registrado con este email, </h4>
                <h5 className={styles.span}>por favor ingrese un email válido</h5>
                <button onClick={handleButton}>volver</button>
            </div>
        }
        </main>
    )
}

export default ResetPassword