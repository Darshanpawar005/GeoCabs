
//Map initialization function with click event
function initMap(){

x = navigator.geolocation;
x.getCurrentPosition(success,failure);

function success(position){
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var coords = new google.maps.LatLng(lat,long);
	var mapOptions = {
		zoom : 10,
		center : coords,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	
	document.forms["co-ords"]["lat"].value=lat;
	document.forms["co-ords"]["lng"].value=long;
	//console.log(long);
	
	var map = new google.maps.Map(document.getElementById("map"),mapOptions);
	var marker = new google.maps.Marker({map:map, position:coords});

   const myLatlng = { lat: lat, lng: long };
    map.addListener("click", (mapsMouseEvent) => {
	let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });
     //infoWindow.open(map);
    // Close the current InfoWindow.
    //infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    
    var a =  mapsMouseEvent.latLng.toString();
  // var b= document.getElementById("one").innerHTML=a;  
  //document.forms["co-ord"]["lat"].value=a;
 document.getElementById("text").innerHTML="Clicked Location";
  var arr = a.split(",");
  var lt=arr[0].slice(1,arr[0].length);
  var ln=arr[1].slice(1,arr[1].length-1);
  document.forms["co-ords"]["lat"].value=lt;
	document.forms["co-ords"]["lng"].value=ln; 
    
    infoWindow.setContent(
      a
      //JSON.stringify(mapsMouseEvent.latLng.toJSON(),null, 2)
    );
    infoWindow.open(map);
    infoWindow.close();
  });


}

//Runs on failure to launch the function
function failure(){
	document.getElementById("lat").innerHTML="IT IS A FAILURE";
    alert("Turn On Internet and Location services!");
}
}





