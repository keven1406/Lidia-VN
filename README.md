# Lidia-VN
Lídia VN é uma engine focada na criação de Visual novels. 

<h2>Como usar</h2>

   A ideia é facilitar a vida do autor fazendo com que ele apenas digite as propriedades no objeto que representa a fala do personagem. No Objeto que está a referida fala, o autor poderá digitar a propriedade referente aos eventos que ele quer que ocorra. Apenas digitando o nome da propriedade e seus atributos, o autor poderá criar toda a sua história baseado nos eventos que cada fala terá sem precisar alterar ou criar código.

A baixo vemos uma lista com todos os comandos da Lídia Engine.

<h2>Propriedades</h2> 

fala: “Olá, eu sou lídia”	- Responsável pelas falas do personagem. Quando quiser que seu personagem fale alguma coisa, basta colocar a fala dentro das aspas (“”). Como no exemplo a seguir: fala: “Oi”.

numero: “1” - Responsável pela ordem da fala. Se na linha de codigo tiver o numero: “1”, essa fala representará a primeira fala do personagem.

personagem: “sasha”	- Refere-se ao nome do personagem.
	
emocao: [“timida.png”, “Normal.png”, “Feliz.png”]	- Refere-se a emoção do personagem. Se for do seu interesse por emoções no rosto do seu personagem, basta colocar essa propriedade com a imagem da expressão do personagem. No array, o primeiro valor refere-se ao personagem que está a direita. O segundo o centro e o terceiro e ultimo, a direita.

posicaoDaEmocao:[“”, “”, “”, “”, “”, “”]	- A posição da emoção é responsável pelo local onde a expressão facial ficará. Dentro dos colchetes podemos notar que existem 6 espaços para colocar valores. Cada espaço corresponde a altura e distancia do objeto. O primeiro espaço se refere a uma posição vertical, enquanto o segundo espaço refere-se a horizontal. Os dois primeiros referem-se a expressão da esquerda, os do meio ao centro e os dois ultimos a direita.

atores: [“ana.jpg”, “lidia.jpg”, “sasha.jpg”]	- Dentro desses colchetes podemos colocar até 3 imagens. Essas três imagens correspondem a:

Primeira imagem – esquerda;
Segunda imagem – centro;
Terceira imagem – direita.

É aqui que podemos adicionar mais personagens a cena.
cenario: “patio.jpg”	O cenario, como o nome da propriedade já diz, serve para escolher o cenario atual da cena. Basta digitar o nome da imagem junto com sua extenção. Quando chegar o momento, o cenario irá mudar para o selecionado.
