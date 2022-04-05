import React from "react";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import {putReview , postReview , getReviews} from '../../actions/reviews'
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import s from './CrearReviews.module.css'
import { useParams } from "react-router-dom";
import login_mujer from '../../image/login_mujer.png'




export default function Reviews () {
    let { idViaje} = useParams()
    const dispatch = useDispatch()
    
    idViaje='1GnT2gEn3i5yV49HAA7M';
     const viaje = idViaje
     console.log('idViaje :>> ', idViaje);

    const conductora= useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    const reviews = useSelector((state) => state.reviewsReducer.reviews)
    //const viaje = useSelector((state) => state.viajesReducer.)
    
    const [input, setInput] = useState({
        idConductora: viaje[0].idConductora,
        idPasajera: viaje[0].idPasajera,
        conductora:viaje[0].conductora,
        pasajera:viaje[0].pasajera,
        comentario:'',
        puntaje:''
    })

  //  const alo = reviews.filter(e => e.review.userId === user.id).length
  //  console.log(user, "este mensaje es el que frao")

    const handleSubmit = (e) => {
      e.preventDefault()
      if(input){
      dispatch(postReview( conductora.idConductora, input))
            setInput({
              idConductora: viaje[0].idConductora,
              idPasajera: viaje[0].idPasajera,
              conductora:viaje[0].conductora,
              pasajera:viaje[0].pasajera,
              comentario:'',
              puntaje:'',
            })
            Swal.fire({
              icon: 'success',
              title: 'Su Comentario se ha creado correctamente',
            })
          }else{
            Swal.fire({
              icon: 'error',
              title: 'ups..su comentario no se ha procesado correctamente',
            })
          }
          }
       

      useEffect(() => {
        dispatch(getReviews(idViaje));     
      }, []);  

    return(<>
    <div className={s.container}>{/* la clase container ocupa el 80% de la pantalla y siempre esta centrada*/}
      <div className="row">{/* row es para colocar todo el contenido en filas*/}
        <div className="col-6 mx-auto">{/*col-6 indica que es una columna y su tamaño es de 6. luego el margin auto para que se centre*/}
          <div>
            <form className="row" style={{justifyContent:"space-between"}} onSubmit={handleSubmit}>
              <textarea  className="form-control" style={{marginBottom:20}} type='text' placeholder="comentario..." rows="3"  value={input.commentary} onChange={e => setInput({ ...input, commentary: e.target.value })}></textarea>
              <div style={{marginBottom:20}} className="btn-group col-3" >{/*agrupa los botones*/}
                <label style={{marginRight:20}}>Calificacion</label>
                <input className="form-input" type='number' max={5} min={1} placeholder="0" value={input.puntaje} required={true} onChange={e => setInput({ ...input, puntaje: e.target.value })} />
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
                <div key={re.idPasajera} >
                  <div className="be-img-comment" >	
                      <img src={re.fotoPerfil ? re.fotoPerfil : login_mujer} alt="" className="be-ava-comment"/>
                  </div>
                  <div className="review-colomn" >
                  <span className="be-comment-name">
                      <h5 href="blog-detail-2.html">Nombre de usuario: {re.pasajera ? re.pasajera : "Juana 123"}</h5>
                    </span>
                    <div>
                      <h6>Puntaje: {
                             Number(re.puntaje)  === 1 ? <div><i className="fas fa-star"></i></div>
                           : Number(re.puntaje)  === 2 ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : Number(re.puntaje)  === 3 ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : Number(re.puntaje)  === 4 ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : Number(re.puntaje)  === 5 ? <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                           : <p>1</p> 
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
