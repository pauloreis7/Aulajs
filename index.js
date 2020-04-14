//Variáveis:

//Criação de variáveis: const nome da variável = 'valor da variável', const diz que tal variável não aceitará nenhum outro valor além do dado para el, será constante.

const nome = 'Paulo Bootcamp'

//console.log exibe uma mensagem ao rodarmos o terminal. console.log(mensagem desejada)

//console.log(nome)


//Variáveis string:

//Variáveis string são variáveis de tipo texto.
//Sua sintaxe é: "texto", 'texto' ou `texto`.

//As strings com ` são chamadas de strig templates e com elas temos a possibilidade de além de adicionar um texto na variavel também podemos chamar outra variavel para a template pela sintaxe: `texto2 ${texto1}`

const aluno01 = 'Paulo'
const aluno02 = 'Diego'
const aluno03 = 'Mayk'

//Variáveis number

//Variáveis number são variáveis de tipo numero.
//Sua sintaxe é identica a string, porém sem nenhum tipo de aspas no conteudo da variavel.
//const notaAluno02 = numero

const notaAluno01 = 10
const notaAluno02 = 9.8
const notaAluno03 = 2

// É possivel realizar operações matemáticas por variáveis de tipo number, pois operações não passam de números.

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

//Condição em JS

//Servem para acionar uma ação no programa se a condição for verdadeira ou falsa

//Sintaxe: if (condição) {
//         ação
//         } else {
//            ação
//}

if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns!!`)
} else {
    console.log(`A média foi de ${media}. Estudem mais!!`)
}