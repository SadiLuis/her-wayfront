import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from './Reviews.module.css';
import ReactStars from "react-rating-stars-component";
import { postReviews } from '../../actions/reviews';
import Swal from 'sweetalert2';


const CrearReview = (props) => {
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        idConductora: props.idConductora,
        idPasajera: props.idPasajera,
        conductora: "",
        pasajera: "",
        puntaje: "",
        comentario: ""
    })

           

    // cambio de comentarios
    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log('Values', values);
    }

    //cambio de rating o star o puntuacion
    const ratingChanged = (newRating) => {
        // console.log('newRating :>> ', newRating);
        setValues({
            ...values,
            puntaje: newRating.toString()
        })
        console.log('Values', values);
    };

    const handleSubmit = (e) => {           // funcion que enviara los datos de mi formulario 
        e.preventDefault()
        if (values.puntaje === '' ||  values.comentario === '') {
            Swal.fire({
                icon: 'error',
                title: 'Ups.. Falta Ingresar la puntuación de ★★★★★ o su Comentario ',
            })
        } else {
            dispatch(postReviews(props.idConductora, values))
            setValues({
                idConductora: props.idConductora,
                idPasajera: props.idPasajera,
                conductora: "",
                pasajera: "",
                puntaje: "",
                comentario: ""
            })
            window.location = `/perfilConductora`
        }
        
    }


    return (
        <div>
            <form className={style.form_review} onSubmit={handleSubmit}>
                {/* ratings o stars */}
                <div className={style.createStar}>
                    <p>QUE TE PARECIÓ EL VIAJE?</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={28}
                        // activeColor="#ffd700"
                        activeColor="rgb(236, 214, 13)"
                        />
                </div>
                {/* caja del comentario */}
                <div className={style.caja}>
                    <textarea
                        className={style.description}
                        title="maximo 120 caracteres"
                        placeholder="Ingrese su Comentario"
                        // rows="3"
                        // cols="70"
                        resize="none"
                        value={values.comentario}
                        onChange={handleOnChange}
                        name="comentario"
                        maxLength="120"                
                    >
                    </textarea>
                    <button
                        type="submit"
                        className={style.boton}
                        title="Click aqui para enviar comentario"
                    >
                    Enviar Comentario
                    </button>
                </div>
                
            </form>
        </div>
    )
}
export default CrearReview;