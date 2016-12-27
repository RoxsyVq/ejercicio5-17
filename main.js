function habla()
{
	var vhora= document.getElementById("hora").value;
	var vhabla = document.getElementById("habla");
    var salida = document.getElementById("salida");

	if(vhora<7 || vhora>20 && (vhabla.checked))
		salida.innerHTML = 1;
	else
		salida.innerHTML = 0; 
}


