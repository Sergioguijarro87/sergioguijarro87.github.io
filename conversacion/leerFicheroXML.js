function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	capaVacia.innerHTML =""
	let conver = xmlDoc.querySelectorAll("linea")
	for(let i=0; i<conver.length; i++)
			if(i % 2 == 0 )
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='izquierda'>" + conver[i].textContent + "</p>"
		else
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='derecha'>" + conver[i].textContent + "</p>"

		
	
}
function CargarFichero()
{
	loadDocA("conver.xml","xml")
}
setInterval(CargarFichero,2000)
