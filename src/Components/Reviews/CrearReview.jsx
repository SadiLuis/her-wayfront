import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './Reviews.module.css';
import ReactStars from "react-rating-stars-component";
import {putReview , postReview , getReviews, deleteReview} from '../../actions/reviews';
import Swal from 'sweetalert2';


const CrearReview = () => {
    const dispatch = useDispatch();
    const conductora = useSelector((state) => state.registroConductoraReducer.conducLogueada)
    const reviews = useSelector((state) => state.reviewsReducer.todasLasreviews);
    console.log('reviews :>> ', reviews);
    const usuaria = useSelector((state) => state.loginRegistReducer.usuariaLogueada)
   
    console.log('user', usuaria);

    const [input, setInput] = useState({
        idConductora: '',
        idPasajera: '',
        conductora: "",
        pasajera: "",
        puntaje: "",
        comentario: ""
    })

           

    // cambio de comentarios
    const handleOnChange = e => {
        dispatch(putReview(conductora && conductora.id, usuaria.id, input))
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log('input', input);
    }

    //cambio de rating o star o puntuacion
    const ratingChanged = (nuevoRating) => {
        // console.log('newRating :>> ', newRating);
        setInput({
            ...input,
            puntaje: nuevoRating.toString()
        })
        console.log('input', input);
    };

    const handleSubmit = (e) => {           // funcion que enviara los datos de mi formulario 
        e.preventDefault()
        if (input.puntaje === '' ||  input.comentario === '') {
            Swal.fire({
                icon: 'error',
                title: 'Ups.. Falta Ingresar la puntuación de ★★★★★ o su Comentario ',
            })
        } else {
            dispatch(postReview(reviews.idConductora, input))
            setInput({
                idConductora:'' ,
                idPasajera:'' ,
                conductora: "",
                pasajera: "",
                puntaje: "",
                comentario: ""
            })
            window.location = `/perfilConductora`
        }     
    }


    useEffect(() => {
        dispatch(getReviews(conductora))
    }, [dispatch, conductora])


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
                        value={input.comentario}
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