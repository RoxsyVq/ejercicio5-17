function habla()
{
	
	var vhabla = document.getElementById("habla");
    var salida = document.getElementById("salida");

	if(vhabla.checked)
		salida.innerHTML = 1;
	else
		salida.innerHTML = 0; 
}

function calcular(){
    var vhora= document.getElementById("hora").value;
    var vhabla= document.getElementById("habla").checked;
    var salida = document.getElementById("salida");
    vhora>=23;
    
    if( (vhora < 7 || vhora > 20) && vhabla.checked){
        salida.innerHTML = 1;
    }
    else{
        salida.innerHTML = 0;    }
}
