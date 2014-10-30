var m = {
	x:0,
	y:0
};
function fillState () {
	if (document.getElementById("the_country").value == "mexico") {
		document.getElementById("the_state").innerHTML="<option value='Nuevo_Leon'>Nuevo Leon</option>"+
		"<option value='DF'>DF</option>";
	}else{
		document.getElementById("the_state").innerHTML="<option value='Texas'>Texas</option>"+
		"<option value='Washington'>Washingtong</option>";
	}
}
function mousePos () {
	document.getElementById("pos").innerHTML = "<p>x:"+m["x"]+"</p><p>y:"+m.y+"</p>";
}

document.addEventListener("mousemove",function(e) {
	m.x = e.clientX || e.pageX; 
	m.y = e.clientY || e.pageY;
},false);
  
document.addEventListener("mouseover",mousePos,false);  

var validator = function() {
	this.is_all_letter = function(validate) {
		return /^[a-zA-Z]+$/.test(validate);
	}; 
	this.is_Mixed = function(validate) {
		return /^[a-zA-Z0-9]+$/.test(validate);
	};                         
	this.is_phone_number = function(validate) {
		return /^[0-9]{10}$/.test(validate);
	}; 
	this.is_valid_url = function(validate) {
		return /^[http:\/\/ | https:\/\/ | www\.][0-9a-zA-Z]/.test(validate);
	};
	this.check_all_radio_and_check_boxes = function(validate) {
		var results_of_check_boxes = [];          
		console.log(validate);
		if (validate[0].type == "radio") {
			 for(i =0 ; i<validate.length;i++){
				if (validate[i].checked) {
						return validate[i].value;
				};
			 }
		}else{
			 for(i =0 ; i<validate.length;i++){
				if (validate[i].checked) {
					results_of_check_boxes.push(validate[i].value);
				};     
				
			}
			return results_of_check_boxes;
		} 
		return false;
	}; 
	this.check_drop = function(validate) { 
		if (validate.options[validate.selectedIndex]) {
			return validate.options[validate.selectedIndex].value;
		}else{
			return false;
		}
	}
}; 
