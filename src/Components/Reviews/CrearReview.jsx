import React, { useEffect, useState} from "react";

//import swal from 'sweetalert';
import { useDispatch, useSelector } from "react-redux";
//import style from './Reviews.module.css';
//import ReactStars from "react-rating-stars-component";
import { postReviews,getReviews,getReviewsDeConductora,putReviews } from '../../actions/reviews';
import { getViaje } from "../../actions/viajes";
import Swal from 'sweetalert2';

export default function Reviews ({id, idViaje}) {

  const reviews = useSelector((state) => state.reviewsReducer.reviews)
  const viaje = useSelector((state) => state.viajesReducer.viajePorId)

  console.log('viaje :>> ', viaje);

    const dispatch = useDispatch()
    const [input, setInput] = useState({
        puntaje: '',
        comentario: ''
    })
    // const Navigate = useNavigate()

   const pasajera = JSON.parse(window.localStorage.getItem( 'usuario'))
  //  const alo = reviews.filter(e => e.review.userId === user.id).length
  //  console.log(user, "este mensaje es el que frao")

    const handleSubmit = (e) => {
      e.preventDefault()
        if (reviews) {
          if ( !pasajera[0].nombre ) {
            e.preventDefault()
            Swal("Necesitas tener una cuenta para dejar comentarios", {
              buttons: false,
              icon: 'error',
              timer: 1500,
            })
            setInput({
                puntaje: '',
                comentario: ''
            })
          }
          else if ( reviews.filter(e => e.id === pasajera[0].idPasajera).length > 0) {
            e.preventDefault()
            dispatch(putReviews(viaje && viaje.id, pasajera[0].idPasajera, input));
            setInput({
              puntaje: '',
              comentario: '',
            })}
                 dispatch(postReviews(viaje && viaje.id, pasajera[0].idPasajera, input))
          // } else if ( !pasajera.admin ) {
          //   e.preventDefault()
          //   //dispatch(postReviews(viaje && viaje.id, pasajera.id , input))
          //   setInput({
          //       puntaje: '',
          //       comentario: ''
          //   })
          
          // } else if ( pasajera.admin ) {
          // e.preventDefault()
          // Swal("Los usuarios administradores no pueden dejar comentarios a los productos", {
          //   buttons: false,
          //   icon: 'error',
          //   timer: 3500,
          // })
          }
        } 
        
      //}       
      useEffect(() => {
        if(viaje.length > 0){
         // getViaje(idViaje)
          //getReviewsDeConductora(id)       
          getReviews(id)
      }else{
          console.log('error');
      }
      }, []);
      

    return(<>
    <div className="container">{/* la clase container ocupa el 80% de la pantalla y siempre esta centrada*/}
      <div className="row">{/* row es para colocar todo el contenido en filas*/}
        <div className="col-6 mx-auto">{/*col-6 indica que es una columna y su tamaño es de 6. luego el margin auto para que se centre*/}
          <div>
            <form className="row" style={{justifyContent:"space-between"}} onSubmit={(e) => handleSubmit(e)}>
              <textarea  className="form-control" 
              style={{marginBottom:20}} 
              type='text' placeholder="comentario..." rows="3"  
              value={input.comentario} 
              onChange={e => setInput({ ...input, comentario: e.target.value })}></textarea>
              <div style={{marginBottom:20}} className="btn-group col-3" >{/*agrupa los botones*/}
                <label style={{marginRight:20}}>Calificacion</label>
                <input className="form-input" 
                type='number' max={5} min={1} 
                placeholder="0" 
                value={input.puntaje}
                 required={true} 
                 onChange={e => setInput({ ...input, puntaje: e.target.value })} />
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
                <div key={re.nombre} >
                  <div className="be-img-comment" >	
                    <a href=" ">
                      <img src={re.fotoPerfil ? re.fotoPerfil : "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538"} alt="" className="be-ava-comment"/>
                    </a>
                  </div>
                  <div className="review-colomn" >
                  <span className="be-comment-name">
                      <h5 href="blog-detail-2.html">Nombre de usuario: {re.nombre ? re.nombre : "username123"}</h5>
                    </span>
                    <div>
                      <h6>Calificacion: {
                            parseInt(re.puntaje)  === 1? <div><i className="fas fa-star"></i></div>
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
// const CrearReview = (props) => {
//     const dispatch = useDispatch();

//     const [values, setValues] = useState({
//         idConductora: props.idConductora,
//         idPasajera: props.idPasajera,
//         conductora: "",
//         pasajera: "",
//         puntaje: "",
//         comentario: ""
//     })

           

//     // cambio de comentarios
//     const handleOnChange = e => {
//         setValues({
//             ...values,
//             [e.target.name]: e.target.value
//         })
//         console.log('Values', values);
//     }

//     //cambio de rating o star o puntuacion
//     const ratingChanged = (newRating) => {
//         // console.log('newRating :>> ', newRating);
//         setValues({
//             ...values,
//             puntaje: newRating.toString()
//         })
//         console.log('Values', values);
//     };

//     const handleSubmit = (e) => {           // funcion que enviara los datos de mi formulario 
//         e.preventDefault()
//         if (values.puntaje === '' ||  values.comentario === '') {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Ups.. Falta Ingresar la puntuación de ★★★★★ o su Comentario ',
//             })
//         } else {
//             dispatch(postReviews(props.idConductora, values))
//             setValues({
//                 idConductora: props.idConductora,
//                 idPasajera: props.idPasajera,
//                 conductora: "",
//                 pasajera: "",
//                 puntaje: "",
//                 comentario: ""
//             })
//             window.location = `/perfilConductora`
//         }
        
//     }


//     return (
//         <div>
//             <form className={style.form_review} onSubmit={handleSubmit}>
//                 {/* ratings o stars */}
//                 <div className={style.createStar}>
//                     <p>QUE TE PARECIÓ EL VIAJE?</p>
//                     <ReactStars
//                         count={5}
//                         onChange={ratingChanged}
//                         size={28}
//                         // activeColor="#ffd700"
//                         activeColor="rgb(236, 214, 13)"
//                         />
//                 </div>
//                 {/* caja del comentario */}
//                 <div className={style.caja}>
//                     <textarea
//                         className={style.description}
//                         title="maximo 120 caracteres"
//                         placeholder="Ingrese su Comentario"
//                         // rows="3"
//                         // cols="70"
//                         resize="none"
//                         value={values.comentario}
//                         onChange={handleOnChange}
//                         name="comentario"
//                         maxLength="120"                
//                     >
//                     </textarea>
//                     <button
//                         type="submit"
//                         className={style.boton}
//                         title="Click aqui para enviar comentario"
//                     >
//                     Enviar Comentario
//                     </button>
//                 </div>
                
//             </form>
//         </div>
//     )
// }
// export default CrearReview;