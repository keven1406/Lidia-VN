//Caso haja cenario na cena, essa função irá sempre retornar o cenario desejado.

const trocarCenario = (falas) => {
    if ("cenario" in falando)
        return "_imagens/_background/" + falando.cenario
}

//charAt(somar) vai pegar cada letra da string especificaa pelo contador somar. Se somar for 0 então ele pegará a primeira letra da string.
//Serve para impedir o bug "Fantasma das letras" que ocorre quando o usuário clica demasiadamente rápido. Impedindo no recursão atual o loop.

const passarTexto = falasProntas => {
    let somar = 0, letraPorLetra = "", interrompeFala = contadora
    const controladorDeTempo = x => {
        if (interrompeFala != contadora)
            return ""
        const tempo = setTimeout( x => {
            letraPorLetra += falasProntas.charAt(somar); 
            document.getElementById("falas").innerHTML = letraPorLetra
            somar++
            if (somar < falasProntas.length)
                return controladorDeTempo()
        },30)
    }
    controladorDeTempo()
}

//Inserindo nome de personagem e fala em forma de String.

const formatarFalas = objetoDaFalaAtual => {
	return falaFormatada = objetoDaFalaAtual.personagem + " - " + objetoDaFalaAtual.fala
}

//função para selecionar o objeto na var falas.

const limitesDaFala = (falas, contadora) => {
	let novaFala = {};
	for (let atual = 0; atual <= contadora; atual++) {
		if (atual == contadora)
			novaFala = falas[atual]
	}
	return novaFala
}
//Responsável por não permitir que a fala vá alem do que o existente, nem retroceda além.

const controle = (numero, total, limite) => {
	if (numero === 1) {
		total += numero
		if (total > limite.length)
			total = limite.length
	}
	else if (numero < 1) {
		total = total - 1
		if (total < 1)
			total = 1
	}
	return total
}

//função impura que representa o corpo principal do programa.

const corpo = (passe) => {
    contadora = controle(passe, contadora, falas);
    passarTexto(formatarFalas(limitesDaFala(falas, contadora)))
    document.getElementById("fundo-jogo").src = trocarCenario(limitesDaFala(falas, contadora))
}
const trocarTela = x => {
	document.getElementById("menu").style.display = "none"
    document.getElementById("jogando").style.display = "block"
    corpo();
}
