function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let peliculas = xmlDoc.querySelectorAll("pelicula")
	for(let i=0; i<peliculas.length; i++)
		if (i == 2)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='selecc'>" + peliculas[i].textContent + "</p>"
		else	
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='bord'>" + peliculas[i].textContent + "</p>"
		
	
}

let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("peliculas.xml","xml");
}
//	loadDocA("peliculas.xml","xml");
