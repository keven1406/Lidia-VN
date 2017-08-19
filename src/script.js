//função para selecionar o objeto na var falas.
const limitesDaFala = (falas, contadora) => {
	let novaFala = {};
	for (let atual = 0; atual <= contadora; atual++) {
		if (atual == contadora)
			novaFala = falas[atual]
	}
	return novaFala
}
//função impura que representa o corpo principal do programa.
const corpo = x => {
	document.getElementById("menu").style.display = "none"
    document.getElementById("jogando").style.display = "block"
    limitesDaFala(falas,contadora)
}