 //função referente ao carregamento do jogo.

const fimDoCarregamento = x =>
    document.getElementById("carregamento").style.display = "none";

//funções para sair ou entrar no jogo

const fechar = (sair) => {
    const confirmacao = confirm("Tem certeza que deseja sair?")
    if (confirmacao == true) {
        document.getElementById("jogando").style.display = "none"
        document.getElementById("menu").style.display = "block"
    }
    contadora = 0   
}

const entrar = x => {
    document.getElementById("menu").style.display = "none"
    document.getElementById("jogando").style.display = "block"
    corpo();
}

/*if (posicaoDaEmocao != undefined)tipoDoRetorno = posicaoDaEmocao*/

const alinhar = (direcao, posEmo, atual, local, slot) => {
    let alinhando = document.getElementById(slot + direcao[atual]) 
    if (local < 0) local = 0;
    let a = 1;
    for (let abb = local; abb < posEmo.length - 1; abb++) {
        if (abb % 2 == 0) {
            alinhando.style.top = posEmo[abb];
        }
        else {
            alinhando.style.left = posEmo[abb]
            break
        }
    }
}

//Tentando deixar mostrar imagem pura

const mostrarEmocao = (posicoes, nome, atual, posEmo) => {
    let local = atual + atual
    let sentimento = document.getElementById("emocao-" + posicoes[atual])
    if (atual == posicoes.length - 1)
        return null
    //nome[atual] != "" ? sentimento.src = "_imagens/" + nome[atual] : sentimento.src = ""
    if (nome[atual] != "") {
        alinhar(posicoes, posEmo, atual, local, "emocao-")
        sentimento.src = "_imagens/" + nome[atual]
    }
    else
        sentimento.src = ""
    if (atual < posicoes.length - 1)
        return mostrarEmocao(posicoes, nome, atual+1, posEmo)
}   

const mostrarPersonagem = (posicoes, personagem, unico) => {
    let local = unico + unico
    let ordem = document.getElementById(posicoes[unico])
    if (unico > posicoes.length - 1)
        return null
    if (personagem[unico] != "") {
        /*alinhar(nome, posicoes, atual, local, "")*/
        ordem.src = "_imagens/" + personagem[unico]
    }
    else
        ordem.src = ""
    if (unico < posicoes.length - 1)
        return mostrarPersonagem(posicoes, personagem, unico+1)
}

//Retornar para onde tem o parametro "acao"    

const retornador = (acao, contadora, falas) => {
    let retorno = {}
    for (let retornando = contadora - 1; retornando >= 0; retornando--) {
        if (acao in falas[retornando]) {
            retorno = falas[retornando]; 
            break;
        }
    }
    return retorno;
}
//Caso haja cenario na cena, essa função irá sempre retornar o cenario desejado.

const trocarCenario = (falas) => {
    if ("cenario" in falas)
        return "_imagens/_background/" + falas.cenario
}

/*interrompeFala serve para impedir o bug "Fantasma das letras"
 que ocorre quando o usuário clica demasiadamente rápido. */

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
		if (total == limite.length)
			total = limite.length -1
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
    contadora = controle(passe, contadora, falas)
    let objFala = limitesDaFala(falas, contadora)
    passarTexto(formatarFalas(objFala))
    //-------------------------------------------------------------------
    if ("cenario" in objFala)
        document.getElementById("fundo-jogo").src = trocarCenario(objFala)
    //-------------------------------------------------------------------
    const posicoes = ["esquerda", "centro", "direita"], atual = 0

    if ("atores" in objFala)
        mostrarPersonagem(posicoes, objFala.atores, atual)
    else {
        let retorno = retornador("atores", contadora, falas)
        mostrarPersonagem(posicoes, retorno.atores, atual)
    }
    //--------------------------------------------------------------------
    if ("emocao" in objFala) {
        mostrarEmocao(posicoes, objFala.emocao, atual, objFala.posicaoDaEmocao)
    }
    else { 
        let retorno = retornador("emocao", contadora, falas)
        mostrarEmocao(posicoes, retorno.emocao, atual, retorno.posicaoDaEmocao)      
    }
}