/* //setear las opciones del mapa 

// var mylatlng={lat:-31.7667, lng:-61.3167};
// //Santa Clara
// var mapOptions={
//     center:mylatlng,
//     zoom:7,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
// };

// //crear el mapa

// var map=new google.maps.Map(document.getElementById("googleMap"), mapOptions)

// //crea service Direction para usar el método route y conseguir un resultado

// var directionService= new google.maps.DirectionsService();
 
// //crear renderizado de direcciones que vamos a usar para mostrar las rutas
// var directionsDisplay= new google.maps.DirectionsRenderer();

// //bindea la directionRenderer
// directionsDisplay.setMap(map);

// //function
//  function calcRuta(){
//      //hace el pedido
//      var request={
//          origin:document.getElementById("desde").value,
//          destination:document.getElementById("hacia").value,
//          travelMode: google.maps.TravelMode.DRIVING,
//          unitSystem:google.maps.UnitSystem.METRIC,
//      }
//      //Pasar la request  a la ruta
//      directionService.route(request, (result, status)=>{
//          if(status==google.maps.DirectionsStatus.OK){

//             //distancia y tiempo
//             const output= document.querySelector("#output");
//             output.innerHTML="<div class='alert-info'> Desde:" + document.getElementById("desde").value + ".<br/> Hacia: " + document.getElementById("hacia").value + ".<br/> Distancia de manejo <i class='fas fa-road'></i> :" + result.routes[0].legs[0].distance.text + ".<br/>Duration <i class='fa-hourglass-start></i>: " + result.routes[0].legs[0].duration.text + ". </div>"
            
//             directionsDisplay.setDirections(result);
//          } else{
//              //borrar las rutas del mapa
//              directionsDisplay.setDirections({routes:[]})
//              //
//              map.setCenter(mylatlng);
//              //mensaje error
//              output.innerHTML="<div class='alert-danger'> No se puede devolver la distancia de viaje</div>"
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


//  //
//  function iniciarMapa(){
//      var coord={lat:-31.7667, lng:-61.3167};
//      var mapOptions={
//         center:mylatlng,
//         zoom:7,
//         mapTypeId:google.maps.MapTypeId.ROADMAP
//     };
//      var map= new google.maps.Map(document.getElementById("googleMap"),mapOptions
//      )
//      var marker= new google.maps.Marker({
//          position:coord,
//          map:map
//      });
//  } */