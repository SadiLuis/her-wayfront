import React from "react";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import {postReview , getReviews, deleteReview} from '../../actions/reviews'
import { useDispatch, useSelector } from "react-redux";
import s from './CrearReviews.module.css'
import { useNavigate, useParams } from "react-router-dom";
import login_mujer from '../../image/login_mujer.png'
import ReactStars from "react-rating-stars-component";




export default function Reviews () {
    let { idViaje, idConductora} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    idViaje='"928y6n2mBkFLCRaB2T5n"';
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
     
      // idConductora:"OOSg1YJ93xwIXqmviPg5",
      // idPasajera:"LaoSjzi9oz46BRGTNUgk",
      // conductora:"carina perez",
      // pasajera:"lucrecia perez",
      comentario:'',
      puntaje:''
    })

    useEffect(() => {
      dispatch(getReviews());     
    }, []);  

 
    const handleSubmit = (e) => {
      e.preventDefault()
      if(input){
      dispatch(postReview(input))
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


console.log('input :>> ', input);
    return(
    <>
    <div className={s.container}>
      <div className="row">
        <div className="col-6 mx-auto">
          <div>
            <form 
                className="row" 
                style={{justifyContent:"space-between"}} 
                onSubmit={handleSubmit}>
              <textarea  
                    className="form-control" 
                    style={{marginBottom:20}} 
                    type='text' 
                    placeholder="comentario..." 
                    rows="3"  
                    value={input.comentario} 
                    onChange={e => setInput({ ...input, comentario: e.target.value })}>
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
                <div key={re.conductora} >
                  <div className="be-img-comment" >	
                      <img src={re.fotoPerfil ? re.fotoPerfil : login_mujer} alt="" className="be-ava-comment"/>
                  </div>
                  <div className="review-colomn" >
                  
                  <span className="be-comment-name">
                      <h5 href="blog-detail-2.html">Nombre de usuario: {re.pasajera ? re.pasajera : "Juana 123"}</h5>
                    </span>
                    <div>
                      <h6>Puntaje: { 
                      <ReactStars
                            count={5}
                            value={re.puntaje}
                            size={28}
                            // activeColor="#ffd700"
                            activeColor="rgb(250, 200, 0)"
                      />}</h6>
                      </div>
                    </div> 
                    <p className="be-comment-text"><b>Comentario:</b> {re.comentario}</p>
                  </div>
              )) 
            :  null 
            }{/*<h2>No hay comentarios</h2>*/}
            </div>  
            <button className="btn btn-primary" onClick={() => navigate('/home')}>Inicio</button>
        </div>
      </div>
    </div>
    </>
    )
}
