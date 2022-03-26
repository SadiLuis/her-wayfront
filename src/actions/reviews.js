import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from './Reviews.module.css';
import ReactStars from "react-rating-stars-component";
import { postReview } from "../../actions/reviews";
import Swal from 'sweetalert2';

const CreateReviews = (props) => {
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
        console.log('Values :>> ', values);
    }

    //cambio de rating o star o puntuacion
    const ratingChanged = (newRating) => {
        // console.log('newRating :>> ', newRating);
        setValues({
            ...values,
            puntaje: newRating.toString()
        })
        console.log('Values :>> ', values);
    };

    const handleSubmit = (e) => {// funcion que enviara los datos de mi formulario 
        e.preventDefault()
        if (values.puntaje ==='' ||  values.comentario === '') {
            Swal.fire({
                icon: 'error',
                title: 'Ups.. Falta Ingresar la puntuación de ★★★★★ o el Comentario ',
                // text: 'o un comentario',
                // footer: '<a href="">Why do I have this issue?</a>'
            })
        } else {
            dispatch(postReview(props.idConductora, values))
            setValues({
                idConductora: props.idConductora,
                idPasajera: props.idPasajera,
                conductora: "",
                pasajera: "",
                puntaje: "",
                comentario: ""
            })
            //window.location = `/conductora/:id`
        }
        
    }


    return (
        <div>
            <form className={style.form_review} onSubmit={handleSubmit}>
                {/* ratings o stars */}
                <div className={style.createStar}>
                    <p>Puntua a tu Conductora</p>
                    <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={28}
                    // activeColor="#ffd700"
                    activeColor="rgb(0, 72, 181)"
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
export default CreateReviews;
