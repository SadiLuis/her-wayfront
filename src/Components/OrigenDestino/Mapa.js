

// ESTE COMPONENTE ES RADIOACTIVO - NO USAR HASTA PRÓXIMO AVISO!!!


// import React from 'react'
// //import Maps from "google-map-react"
// import {GiRoad} from "react-icons/gi"


//          //setear las opciones del mapa 

// var mylatlng={lat:38.3460, lng:-0.4907};
// var mapOptions={
//     center:mylatlng,
//     zoom:7,
//     mapTypeId:google.maps.mapTypeId.ROADMAP
// }

// //crear el mapa

// var map=new google.maps.Map(document.getElementById("googleMap"), mapOptions)

// //crea service Direction para usar el método route y conseguir un resultado

// var direccionService= new google.maps.DirectionService();
 
// //crear renderizado de direcciones que vamos a usar para mostrar las rutas
// var direccionesMostrar= new google.maps.DirectionsRenderer();

// //bindea la direcciónMostrar
// direccionesMostrar.setMap(map);

// //function
//  function calcRuta(){
//      //hace el pedido
//      var request={
//          origin:document.getElementById("desde").value,
//          destino:document.getElementById("destino").value,
//          viajeModo: google.maps.TravelMode.DRIVING,
//          unidad:google.maps.UnitSystem.METRIC,
//      }
//      //Pasar la request  a la ruta
//      direccionService.route(request, (result, status)=>{
//          if(status==google.maps.DirectionsStatus.OK){

//             //distancia y tiempo
//             const output= document.querySelector("#output");
//             output.innerHTML="<div class="alerta-info"> Desde:" +document.getElementById("desde").value + ".<br/>"Hacia:" + document.getElementById("hacia").value + "<br/> Distancia de manejo" <GiRoad><GiRoad/>:" + result.routs[0].legs[0].distance.text + ".<br/>"Duration : " + result.routes[0].legs[0].duration.text + ". </div>"
            
//             direccionesMostrar.setDirections(result);
//          } else{
//              //borrar las rutas del mapa
//              direccionesMostrar.setDirections({routes:[]})
//              //
//              map.setCenter(mylatlng);
//              //mensaje error
//              output.innerHTML="<div className="alert-danger"> No se puede devolver la distancia de viaje"</div>
//          }
//      });

//  }

//  //autocomplete
//  var options={
//      types:['(cities)']
//  }
//  var input1=document.getElementById("desde");
//  var autocomplete1= new google.maps.places.Autocomplete(input1, options)

//  var input2=document.getElementById("hacia");
//  var autocomplete2= new google.maps.places.Autocomplete(input2, options)


     

 




   
