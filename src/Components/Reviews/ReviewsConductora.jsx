import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview,  getReview } from "../../actions/reviews";
import s from './Reviews.module.css';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const conductora = [
    {
        idconductora: 1,
        puntaje: 10
    }
]

const Reviews = (props) => {

    // const conductora = useSelector(state => state.reviewReducer.obtenerReview);
    // localStorage.setItem('review', JSON.stringify(conductora));
     const dispatch = useDispatch();

    // // obtengo mi usuario parseado
    // const usuario =  JSON.parse(localStorage.getItem('user'));

    // para sacar el promedio del puntaje/usuarios
    // const promPuntaje = conductora.length
    // let cantPuntos = 0
    // for (let i = 0; i < promPuntaje; i++) {
    //     cantPuntos += parseInt(conductora[i].puntaje);
    // }
    
    // promedio de todos mis reviews
    // let promedio = cantPuntos/promPuntaje
    let promedio = 4.32
    // // console.log(' :>> ',Math.round(promedio));

    // useEffect(()=>{
    //     dispatch(getReview(props.idconductora))
    // },[dispatch, props.idconductora])


    // array interno para darle valor a cada estrella seleccionada
    const valoracion = ['Insuficiente','Malo','Bueno','Muy Bueno', 'Excelente']


    // funcion que pasa el paramtro idconductora e idReview
    function deletereview(idconductora, idReview){
        // mi alerta antes de eliminar mi review
        Swal.fire({
            title: 'Estas Seguro que quieres eliminar tu Review?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminarlo!'
            }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteReview(idconductora, idReview))
                Swal.fire(
                'Eliminado!',
                'Su Review ha sido eliminada.',
                'Éxito'
                )
            }
        });
    }


    return(
        // comprueba si existe el promedio
        Math.round(promedio)
        ?
        <div>     
            <p className={s.titulo_review}>Valora a tu conductora</p>   
            <div className={s.cuadro_barras} >
                <div className={s.promedio}>
                {
                    promedio.toFixed(1)  //promedio de todos mis reviews 
                }
                <ReactStars
                    count={5}
                    value={promedio.toFixed(1)}
                    size={28}
                    edit={false}
                    // activeColor="#ffd700"
                    activeColor="rgb(0, 72, 181)"
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                />
                <p className={s.tamaño_opinion}>
                    puntos 15
                    {/* Promedio entre {cantPuntos} Opiniones */}
                </p>
            </div>
            <div>   

                {/* *********count 5************** */}
                <div className={s.count_star}>
                    <p>5 estrellas</p>
                        <progress
                        className={s.barra_exterior}
                        max="100"
                        value={((conductora.filter((a) => parseInt(a.puntaje)===5 )).length)*3}
                        >
                        </progress>
                    {(conductora.filter((a) => parseInt(a.puntaje)===5 )).length}
                </div>

                {/* ************count 4**************** */}
                <div className={s.count_star}>
                    <p>4 estrellas</p>
                    <progress
                        className={s.barra_exterior}
                        max="100"
                        value={((conductora.filter((a) => parseInt(a.puntaje)===4 )).length)*3}
                    >
                    </progress>
                    {(conductora.filter((a) => parseInt(a.puntaje)===4 )).length}
                </div>

                {/* **************count 3******************* */}
                <div className={s.count_star}>
                    <p>3 estrellas</p>
                    <progress
                        className={s.barra_exterior}
                        max="100"
                        value={((conductora.filter((a) => parseInt(a.puntaje)===3 )).length)*3}
                        >
                        </progress>
                    {(conductora.filter((a) => parseInt(a.puntaje)===3 )).length}
                </div>
                {/* **************count 2******************* */}

                <div className={s.count_star}>
                    <p>2 estrellas</p>
                    <progress
                        className={s.barra_exterior}
                        max="100"
                        value={((conductora.filter((a) => parseInt(a.puntaje)===2 )).length)*3}
                    >
                    </progress>
                    {(conductora.filter((a) => parseInt(a.puntaje)===2 )).length}
                </div>
                
                {/* **************count 1******************* */}
                <div className={s.count_star}>
                    <p>1 estrellas</p>
                    <progress
                        className={s.barra_exterior}
                        max="100"
                        value={((conductora.filter((a) => parseInt(a.puntaje)===1 )).length)*3}
                        >
                        </progress>
                    {(conductora.filter((a) => parseInt(a.puntaje)===1 )).length}
                </div>
            </div>
        </div>
            {
                conductora.map((e,index) => 
                <div key={index} className={s.review_comentario} >
                <div>
                {/* vista del conteo de star */}
                <ReactStars
                    count={5}
                    value={parseInt(e.puntaje)}
                    size={24}
                    edit={false}
                    // activeColor="#ffd700"
                    activeColor="rgb(0, 72, 181)"
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                />
                </div>
                <div className={s.valor_review} >
                    {
                        valoracion.filter((a,index) => index === parseInt(e.puntaje)-1 )
                    }
                </div>
                <div >
                {
                    // (e.userIdUser === usuario.idUser)
                    // ? (
                        <div className={s.editar_remove}>
                        {e.description} 
                            <div  className={s.editar_remove}> 
                               <Link
                                    className={s.boton_editar}
                                    to={`/conductora/${e.idconductora}/review/${e.idReviews}`}
                                >
                                    <FontAwesomeIcon icon={faEdit}/> Editar
                                </Link> 
                                <button
                                    type="button"
                                    className={s.boton_eliminar}
                                    onClick={()=>deletereview(e.idconductora, e.idReviews)}
                                >
                                    <FontAwesomeIcon icon={faTrashAlt}/> Eliminar
                                </button>
                            </div>                        
                        </div>
                //     )
                //     :<div>
                //         {e.description}
                //     </div>
                 }  
            </div>          
        </div>
    )}
        <div>
            <p>Copyright © 2021-2022 HER-WAY S.A.</p>
            <p>soyHenry</p>
            <p>¡Descarga gratis la app de HER-WAY S.A.</p> 
            </div>           
        </div>
        : <div>
            <div className={s.comentario_vacio} >
            <ReactStars
                        count={5}
                        size={28}
                        edit={false}
                        // activeColor="#ffd700"
                        activeColor="rgb(0, 72, 181)"
                        emptyIcon={<i className="far fa-star"></i>}
                    />
                Sin PuntuacioncantPuntos Comentarios
            </div>        
        <div>
            <p>Copyright © 2021-2022 HER-WAY S.A.</p>
            <p>soyHenry</p>
            <p>¡Descarga gratis la app de HER-WAY S.A.</p> 
            </div> 
        </div>               
    )

}

export default Reviews;