 /* - - - função referente ao carregamento do jogo. Ela 
 impede que o jogo inicie antes do computador processar todo o código - - - */
    function fimDoCarregamento() {
        document.getElementById("carregamento").style.display = "none";
    }

/* - - - Aqui é referente ao menu inicial do jogo. Caso o jogador pressione iniciar,
 a section deixará de  ser exibida, e a outra section referente a reprodução do game,
  que antes não estava sendo exibida, será mostrada. - - -*/

    function iniciarOuVoltar(iniciar) {
        if (iniciar == true) {
            trocaDeFalas(contadora);
            document.getElementById("menu").style.display = "none";
            document.getElementById("jogando").style.display = "block";
        }
        else {
            contadora = 0;
            var confirmacao = confirm("Tem certeza que deseja sair?");
            if (confirmacao == true) {
                document.getElementById("jogando").style.display = "none";
                document.getElementById("menu").style.display = "block";
            }
        }
    }

// - - - Bloco para mostrar personagens e emoções na tela. - - -
/* A function a baixo tem o objetivo de processar o alinhamento da expressão facial ao mesmo tempo que o alinhamento do corpo do personagem
Ela não está completa.*/
    function posicoesEmocao(posicoes, atual, local, tipoDoRetorno, slot, tipoDaCondicao, posicaoDaEmocao) {
        if (posicaoDaEmocao != undefined)
            tipoDoRetorno = posicaoDaEmocao;  /* Falta corrigir e incrimentar isso aqui. Espero que eu consiga atender.*/
        for (var emocaoAtual = local; emocaoAtual < tipoDoRetorno.length; emocaoAtual++) {
            if ((emocaoAtual % 2 == 0) && (emocaoAtual != "")) //Se emocao atual der resto 0, o valor será redirecionado para a posição top, se 1 será para left.
                document.getElementById(slot + posicoes[atual]).style.top = tipoDaCondicao[emocaoAtual];
            else {
                document.getElementById(slot + posicoes[atual]).style.left = tipoDaCondicao[emocaoAtual];
                break
            }
        }
    }

    function mostrarEmocao(retorno, tipoDaCondicao, posicoes, atual, slot, posicaoDaEmocao) { //falando, atores ou emoçoes, posicoes, atual = 0 e "".
        var local = atual + atual; //serve para separar o array das emocoes
        if (atual == posicoes.legnth - 1)
            return null;
        else if (tipoDaCondicao[atual] != "") { //Aqui ele vê se o tipoDaCondicao é referente a atores ou emocoes.
            posicoesEmocao(posicoes, atual, local, tipoDaCondicao, slot, tipoDaCondicao, posicaoDaEmocao);
            document.getElementById(slot + posicoes[atual]).src = "_imagens/" + tipoDaCondicao[atual];
        }
        else
            document.getElementById(slot + posicoes[atual]).src = "";
        if (atual < posicoes.length - 1)
            return mostrarEmocao(retorno, tipoDaCondicao, posicoes, atual+1, slot, posicaoDaEmocao);
    }
    
    function retornador(posicoes, tipoDeCondicao, atual, acao, nomeDaPosicao, posicaoDaEmocao) {
        var retorno = {};
        for (var retornando = contadora - 1; retornando >= 0; retornando--) {
            if (acao in falas[retornando]) {
                retorno = falas[retornando]; 
                break;
            }
        }
        if (acao == "atores")
            mostrarEmocao(retorno, retorno.atores, posicoes, atual, nomeDaPosicao);
        else
            mostrarEmocao(retorno, retorno.emocao, posicoes, atual, nomeDaPosicao, retorno.posicaoDaEmocao);
    }

/* - - - A função trocaAtores observa se contem no objeto "falando" atores ou emoção - - -*/
    
    function trocaAtores(falando) {
        var posicoes = ["esquerda", "centro", "direita"], atual = 0;
        if ("atores" in falando)
            mostrarEmocao(falando, falando.atores, posicoes, atual, "");
        else 
            retornador(posicoes, "", atual, "atores", "");
        if ("emocao" in falando)
           	mostrarEmocao(falando, falando.emocao, posicoes, atual, "emocao-", falando.posicaoDaEmocao);
        else
            retornador(posicoes, "", atual, "emocao", "emocao-");
    }

/* - - - As funções a baixo são para a troca de cenario. - - - */
    
    function trocaCenario() {
        if ("cenario" in falando)
            document.getElementById("fundo-jogo").src = "_imagens/_background/" + falando.cenario;
    }

/* - - - Nessa função, a falado personagem é formatada acrescentando o nome do
 personagem ao inicio da fala. - - - */

    function formatandoFalas(falaSelecionada) {
            var falaFormatada = falando.personagem + " - " + falaSelecionada;
            return falaFormatada;
        }

/* - - - Aqui entra o selecionador de falas. Ele será responsável por verificar de 
qual personagem é a fala, qual ordem é a fala e que expressão o personagem demonstra
quando profere tal fala. Quando o resutado é encontrado, ele é armazenado na váriavel 
global "falando", que será utilizada futuramente, por outras funções - - - */
	
    function selecionandoFala(contadora) {
            for (var i = 0; i < falas.length; i++) {
                if (contadora == falas[i].numero)
                    falando = falas[i];
            }
            return falando.fala;
        }

/* - - - Aqui verifica se possui falas quando o usuario clica no botão "anterior" e quando 
ele clica no botão "Proximo. Também chama a funcão passaTexto(), que cria um efeito letra por
letra na tela. A função passaTexto chama a função selecionandoFala() que por sua vez, traz
o texto já editado para fazer com que a passaTexto o imprima na tela - - - - */

    function passaTexto(falasProntas) {
        var somar = 0, letraPorLetra = "", interrompeFala = contadora;
        function controladorDeTempo() {
            if (interrompeFala != contadora) //Serve para impedir o bug "Fantasma das letras" que ocorre quando o usuário clica demasiadamente rápido. Impedindo no recursão atual o loop.
                return "";
            var tempo = setTimeout(function() {
                letraPorLetra += falasProntas.charAt(somar); //charAt(somar) vai pegar cada letra da string especificaa pelo contador somar. Se somar for 0 então ele pegará a primeira letra da string.
                document.getElementById("falas").innerHTML = letraPorLetra;
                somar++;
                if (somar < falasProntas.length)
                    return controladorDeTempo();
            },30);
        }
        controladorDeTempo();
    }
	function trocaDeFalas(numero) {
		if (numero == 1)
			contadora += numero;
			if (contadora > falas.length)
				contadora = falas.length;
		else if (numero < 1) {
			contadora = contadora - 1;
			if (contadora < 1)
				contadora = 1;
		}
        passaTexto(formatandoFalas(selecionandoFala(contadora)));
        trocaCenario();
		trocaAtores(falando);
	}

/* - - - Aqui é onde salvamos o prograsso da nossa visual novel. Jánafunction continuar(),
pegamos o valor salvo e trazemos novamente pro jogo., fazendo com que o jogo volte para a
parte onde o usuario salvou - - - */

	function salvar() {
        localStorage.setItem("contadora", contadora);
	}
    function continuar(){
        contadora = JSON.parse(localStorage.getItem("contadora"));
        iniciarOuVoltar(true);
    }
