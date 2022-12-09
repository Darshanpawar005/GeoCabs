


// Validation of user input while Registration
function validate(){
	
	var username = document.forms["register"]["username"].value;
	var fullname = document.forms["register"]["fullname"].value;
	var street = document.forms["register"]["street"].value;
	var city = document.forms["register"]["city"].value;
	var state = document.forms["register"]["state"].value;
	var zip = document.forms["register"]["zip"].value;
	var phone = document.forms["register"]["phone"].value;
	var password = document.forms["register"]["password"].value;
	var confirm = document.forms["register"]["confirm"].value;
	
	if(username==""){
		document.getElementById("username1").innerHTML="Please provide Username";
		return false;
	}else{
		document.getElementById("username1").innerHTML="";
	}
	
	if(fullname==""){
		document.getElementById("fullname1").innerHTML="Please provide Fullname";
		return false;
	}else{
		document.getElementById("fullname1").innerHTML="";
	}
	
	if(street==""){
		document.getElementById("street1").innerHTML="Please provide Street";
		return false;
	}else{
		document.getElementById("street1").innerHTML="";
	}
	
	if(city==""){
		document.getElementById("city1").innerHTML="Please provide City";
		return false;
	}else{
		document.getElementById("city1").innerHTML="";
	}
	
	if(state!=""){
		if(state=="Maharashtra"){
			document.getElementById("state1").innerHTML="";
		}else{
		document.getElementById("state1").innerHTML="Provide valid State";
		return false;
	}
		
	}else{
		document.getElementById("state1").innerHTML="Please provide State";
		return false;
	}
	
	if(zip==""){
		document.getElementById("zip1").innerHTML="Please provide Zip";
		return false;
	}else{
		var regex=/(^[1-9][0-9]{5}$)/;
		if(regex.test(zip)){
			document.getElementById("zip1").innerHTML="";
		}else{
		    document.getElementById("zip1").innerHTML="Provide valid ZIP";	
		    return false;
		}
	}
	
	if(phone==""){
		document.getElementById("phone1").innerHTML="Please provide Phone Number";
		return false;
	}else{
		var regex = /^[6-9]\d{9}$/gi;
		if(regex.test(phone)){
			document.getElementById("phone1").innerHTML="";
		}
		else{
		    document.getElementById("phone1").innerHTML="Provide valid Phone Number";	
		    return false;
		}
	}
	
	if(password==""){
		document.getElementById("password1").innerHTML="Please Enter Password";	
	    return false;
	}else{
		document.getElementById("password1").innerHTML="";	
	}
	
	if(confirm==""){
		document.getElementById("confirm1").innerHTML="Please Re-enter Password";	
	    return false;
	}else{
		document.getElementById("confirm1").innerHTML="";	
	}
	
	if(password!=confirm){
		document.getElementById("confirm1").innerHTML="Passwords do not match";	
	    return false;
	}else{
		document.getElementById("confirm2").innerHTML="Password Matched!";
	}
	
	
	return true;
}