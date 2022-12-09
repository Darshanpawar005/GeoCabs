






/*function init(){
	var a="Aaaa";
	alert(a);
}*/



/*function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}*/





/*let map;
let marker;
let geocoder;
let responseDiv;
let response;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 },
    mapTypeControl: false,
  });
  geocoder = new google.maps.Geocoder();

  const inputText = document.createElement("input");

  inputText.type = "text";
  inputText.placeholder = "Enter a location";

  const submitButton = document.createElement("input");

  submitButton.type = "button";
  submitButton.value = "Geocode";
  submitButton.classList.add("button", "button-primary");

  const clearButton = document.createElement("input");

  clearButton.type = "button";
  clearButton.value = "Clear";
  clearButton.classList.add("button", "button-secondary");
  response = document.createElement("pre");
  response.id = "response";
  response.innerText = "";
  responseDiv = document.createElement("div");
  responseDiv.id = "response-container";
  responseDiv.appendChild(response);

  const instructionsElement = document.createElement("p");

  instructionsElement.id = "instructions";
  instructionsElement.innerHTML =
    "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
  marker = new google.maps.Marker({
    map,
  });
  map.addListener("click", (e) => {
    geocode({ location: e.latLng });
  });
  submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value })
  );
  clearButton.addEventListener("click", () => {
    clear();
  });
  clear();
}

function clear() {
  marker.setMap(null);
  responseDiv.style.display = "none";
}

function geocode(request) {
  clear();
  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;

      map.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      marker.setMap(map);
      responseDiv.style.display = "block";
      response.innerText = JSON.stringify(result, null, 2);
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });
}*/




 
	


//Launch map with this default function
function initMap() {
	
	var form = document.getElementById("placename");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
  
  
  var api_key = 'a37523d2a21f423f91a35c3cf9f8ba9c';
  

  var api_url = 'https://api.opencagedata.com/geocode/v1/json'
  //var name = document.getElementById("places").value ;
  

 
  var request_url = api_url
    + '?'
    + 'key=' + api_key
    //+ '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&q=' + encodeURIComponent("India");
    ;

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  var latitude;
  var longitude;
  
  request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200){
      // Success!
      var data = JSON.parse(request.responseText);
      //alert(data.results[0].formatted); // print the location
      latitude = (data.results[0].bounds.northeast.lat+data.results[0].bounds.southwest.lat)/2;
      longitude = (data.results[0].bounds.northeast.lng+data.results[0].bounds.southwest.lng)/2;
     // document.forms["co-ords"]["lat"].value=latitude+" "+longitude;
      //alert(latitude+" "+longitude);
       document.getElementById("text").innerHTML="Default Location -</br> India";
      document.forms["co-ords"]["lat"].value=latitude;
      document.forms["co-ords"]["lng"].value=longitude;
      
      const myLatlng = { lat: latitude, lng: longitude };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
  });
  // Create the initial InfoWindow.
  
  
  // Configure the click listener.
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
      
      
      
    } else if (request.status <= 500){
      // We reached our target server, but it returned an error

      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log('error msg: ' + data.status.message);
    } else {
      console.log("server error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("unable to connect to server");
  };

  request.send();  // make the request

  
  //console.log(latitude);
  
}































// Functions runs on different user search Place
function initMaps() {
  
  
  var api_key = 'a37523d2a21f423f91a35c3cf9f8ba9c';
  

  var api_url = 'https://api.opencagedata.com/geocode/v1/json'
  var name = document.forms["address"]["place"].value ;
  alert(name);

 
  var request_url = api_url
    + '?'
    + 'key=' + api_key
    //+ '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&q=' + encodeURIComponent(name);
    ;

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  var latitude;
  var longitude;
  
  request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200){
      // Success!
      var data = JSON.parse(request.responseText);
      //alert(data.results[0].formatted); // print the location
      latitude = (data.results[0].bounds.northeast.lat+data.results[0].bounds.southwest.lat)/2;
      longitude = (data.results[0].bounds.northeast.lng+data.results[0].bounds.southwest.lng)/2;
      document.forms["co-ords"]["lat"].value=latitude+" "+longitude;
      //alert(latitude+" "+longitude);
      
      document.getElementById("text").innerHTML="Searched Location";
      document.forms["co-ords"]["lat"].value=latitude;
      document.forms["co-ords"]["lng"].value=longitude;
      
      const myLatlng = { lat: latitude, lng: longitude };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatlng,
  });
  // Create the initial InfoWindow.
  
  
  // Configure the click listener.
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
      
      
      
    } else if (request.status <= 500){
      // We reached our target server, but it returned an error

      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log('error msg: ' + data.status.message);
    } else {
      console.log("server error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("unable to connect to server");
  };

  request.send();  // make the request

  
  //console.log(latitude);
  
}