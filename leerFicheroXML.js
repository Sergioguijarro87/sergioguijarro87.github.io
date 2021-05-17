function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libros.length; i++)
		if (i == 2)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='selecc'>" + libros[i].textContent + "</p>"
		else	
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='bord'>" + libros[i].textContent + "</p>"
		
	
}
	loadDocA("libros.xml","xml");
