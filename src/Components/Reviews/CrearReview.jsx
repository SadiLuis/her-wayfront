import React from "react";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import {putReview , postReview , getReviews} from '../../actions/reviews'
import { useDispatch, useSelector } from "react-redux";
//import login_mujer from '../../image/login_mujer.jpg'
import s from './CrearReviews.module.css'
import { getReviewsDeConductora } from "../../actions/reviews";
import { getViaje } from "../../actions/viajes";




export default function Reviews () {

    const reviews = useSelector((state) => state.reviewsReducer.reviews)
    const viaje = useSelector((state) => state.viajesReducer.viajeFiltradoId)
    

  console.log( viaje);
    //console.log(reviews)
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        idConductora:viaje.idConductora,
        idPasajera:viaje.idPasajera,
        conductora:viaje.conductora,
        pasajera:viaje.pasajera,
        puntaje: '',
        comentario: ''
    })
    // const Navigate = useNavigate()
   console.log(reviews)
   

  //  const alo = reviews.filter(e => e.review.userId === user.id).length
  //  console.log(user, "este mensaje es el que frao")

    const handleSubmit = (e) => {
      e.preventDefault()
        if (reviews.length===0) {
          if ( !viaje) {
            e.preventDefault()
            Swal("Necesitas tener una cuenta para dejar comentarios", {
              buttons: false,
              icon: 'error',
              timer: 1500,
            })
            setInput({
                idConductora:viaje.idConductora,
                idPasajera:viaje.idPasajera,
                conductora:viaje.conductora,
                pasajera:viaje.pasajera,
                puntaje: '',
                comentario: ''
            })
          }
          else if ( reviews.filter(e => e.reviews[0].idConductora === viaje.idConductora).length > 0) {
            e.preventDefault()
            dispatch(putReview(viaje && viaje.idViaje, viaje.idPasajera, viaje.idConductora, input));
            setInput({
                idConductora:viaje.idConductora,
                idPasajera:viaje.idPasajera,
                conductora:viaje.conductora,
                pasajera:viaje.pasajera,
                puntaje: '',
                comentario: '',
            })}
                 dispatch(postReview(viaje && viaje.idViaje,viaje.idPasajera, viaje.idConductora, input))
        //   } else if ( !user.admin ) {
        //     e.preventDefault()
        //     setInput({
        //       calification: '',
        //       commentary: '',
        //     })
          
        //   } else if ( user.admin ) {
        //   e.preventDefault()
        //   swal("Los usuarios administradores no pueden dejar comentarios a los productos", {
        //     buttons: false,
        //     icon: 'error',
        //     timer: 3500,
        //   })
          }
        } 
        
      //}       
      useEffect(() => {
        dispatch(getReviews());
        getReviewsDeConductora(reviews.idConductora)
        getViaje(viaje.idPasajera)
      }, []);
      

    return(<>
    <div className={s.contenedor}>{/* la clase container ocupa el 80% de la pantalla y siempre esta centrada*/}
      <div className="row">{/* row es para colocar todo el contenido en filas*/}
        <div className="col-6 mx-auto">{/*col-6 indica que es una columna y su tamaño es de 6. luego el margin auto para que se centre*/}
          <div>
            <form 
                className="row" 
                style={{justifyContent:"space-between"}} 
                onSubmit={(e) => handleSubmit(e)}>
              <textarea  
                    className={s.formControl} 
                    style={{marginBottom:20}} 
                    type='text' 
                    placeholder="comentario..." 
                    rows="3"  
                    value={input.comentario} 
                    onChange={(e) => setInput({ ...input, comentario: e.target.value })}>
              </textarea>
              <div style={{marginBottom:20}} className="btn-group col-3" >{/*agrupa los botones*/}
                <label style={{marginRight:20}}>Calificacion</label>
                <input 
                    className="form-input" 
                    type='number' 
                    max={5} 
                    min={1} 
                    placeholder="0" 
                    value={input.puntaje} 
                    required={true} 
                    onChange={(e) => setInput({ ...input, puntaje: e.target.value })} />
              </div>
              <div className="col-3 text-end" style={{marginLeft:50}} >
              <button className="btn btn-primary">Comentar</button>
              </div>
            </form>
          </div>
          <hr className="featurette-divider"/>
          <div>
            {reviews.length > 0 ?
              reviews.map((re) => (
                <div key={re.conductora} >
                  
                  <div className="review-colomn" >
                  <span className="be-comment-name">
                      <h5 href="blog-detail-2.html">Nombre de Pasajera: {re.pasajera? re.pasajera: "nombre123"}</h5>
                    </span>
                    <div>
                      <h6>Calificacion: {
                             (re.puntaje)  === 1? <div><i className="fas fa-star"></i></div>
                           : parseInt(re.puntaje)  === 2? <div><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : parseInt(re.puntaje)  === 3? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : parseInt(re.puntaje)  === 4? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : parseInt(re.puntaje)  === 5? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : <h1>1</h1>
                        }</h6>
                    </div>
                    
                    <p className="be-comment-text"><b>Comentario:</b> {re.comentario}</p>
                  </div> 
                </div>
              )) 
            :  null 
            }{/*<h2>No hay comentarios</h2>*/}
            </div>
        </div>
      </div>
    </div>


    </>
        
    )
        }


