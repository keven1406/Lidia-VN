/* - - - Conjunto de váriaveis que serão usadas durante o programa. Temos a contadora que irá contar a ordem das falas. Um Objeto que contem todas as falas dos personagens e qual é a emoção que ele irá transmirtir. Ainda abre brecha para colocar o som da voz deles e talvez o som do cenario. - - - */

/* Ideia atores. Essa ideia é utilizar mais uma propriedade quem tem um array. Nesse array irão conter os personagens que estarão na cena. No caso, o maximo é 3. Mas é bom pois pode aumentar o numero, já que um array é extendível. O número do array é referente a imagem da esquerda, o 1 ao centro e o 2 a direita. Logo teremos 3 personans.*/
	
        var contadora = 0, falando = {}, posicao = "centro";
	var falas = [
                {numero: 1, personagem: "Lídia", fala: "Olá, eu sou a Lídia.", emocao: ["","",""], posicaoDaEmocao: ["","","","","",""], atores:["", "sasha.png", ""], cenario: "patio.jpg"},
                {numero: 2, personagem: "Lídia", fala: "Sou uma Biblioteca para criação de Visual Novels."},
                {numero: 3, personagem: "Lídia", fala: "Agora vou apresentar tudo o que posso fazer pra você. Espero que goste de mim!"},
                {numero: 4, personagem: "Lídia", fala: "Há, já ia me esquecendo, tenho que apresentar pra você meus amigos! Esse do meu lado esquerdo é o Tony.", atores:["","sasha.png",""]},
                {numero: 5, personagem: "Tony", fala: "Olá! Só pra deixar claro, não vá se interessar pela Lídia. Ela já é minha!", atores:["tony.png","sasha.png", ""]},
                {numero: 6, personagem: "Lídia", fala: "Tony seu inútil!!! Como pode dizer isto? Não sou nada sua!", emocao: ["","sasha-timida.png",""], posicaoDaEmocao: ["","","249px","495px","",""]},
                {numero: 7, personagem: "Tony", fala: "Hehehehe... Calma ae, só tava dando as boas vindas pra ele."},
                {numero: 8, personagem: "Lídia", fala: "Vamos voltar as apresentações. Essa a minha direita é... Vou deixar que ela mesmo se apresente.", emocao: ["","",""], atores: ["tony.png","sasha.png","lidia.png"]},
                {numero: 9, personagem: "Sasha", fala: "O-olá... Sou a Sa-sa-sasahalada!"},
                {numero: 10, personagem: "Lídia", fala: "Desculpe, ela é tímida hehehe. O nome dela é Sasha."},
                {numero: 11, personagem: "Todos", fala: "Seja bem vindo a Lídia World... Ops, lídia engine. Que você consiga achar o que procura!"}
                ];