//Funções Estruturas Completas
function mensagem(f: string = 'Qualquer Coisa'): string{
    return f;
}

console.log(mensagem());

function soma(a: number, b:number,): void{
    console.log(a + b);
}

console.log(soma(2,3));

function Saudacao(nome:string = 'Visitante'): string{
    return `Olá ${nome}!`;
}

console.log(Saudacao('Pedro'));

function multiplicacao(a:number, b?:number):number{
    return b !== undefined ? a * b: a;
}

console.log(multiplicacao(2,5));

console.log(multiplicacao(2));

//Funções Estruturas Lambda
const mensagem1 = (f:string = 'Qualquer coisa da função Lambda'): string => f;

console.log(mensagem1());

const soma1 = (a:number, b:number): void => console.log(a+b);

console.log(soma1(2,6));

const saudacao1 = (nome: string = 'Visitante') => `Olá ${nome}!`;

console.log(saudacao1('Pedro Lambda'));

const multiplicar1 = (a: number, b?: number): number => b !== undefined ? a * b: a;

console.log(multiplicar1(3,9));

//Usando o Filter
//Sintaxe Básica
/*array.filter((elemento, índice, arrayOriginal) => {
    return condição;
})*/

//Filtrando números pares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

let pares = numeros.filter(n => n%2 === 0);

console.log(pares);

//Filtrando números maiores que um valor
let valores = [10, 25, 30, 45, 50];

let maioresQue30 = valores.filter(n => n > 30);

console.log(maioresQue30);

//Filtrando palavras ocm mais de 5 letras 
let palavras = ["sol", "chuva", "trovão", "tempestade", "vento"];

let longas = palavras.filter(p => p.length > 5);

console.log(longas);

//Filtrando por Prioridade
type Pessoa = {
    nome: string;
    idade: number;
}

const pessoas: Pessoa[] = [
    {nome: "Ana", idade: 30},
    {nome: "joão", idade: 20},
    {nome: "Maria", idade: 25},
    {nome: "Carlos", idade: 18},
];

let maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);

console.log(maioresDeIdade);

//filtrando itens disponíveis em Estoque
type Produto = {
    nome: string;
    estoque: number;
};

let produtos: Produto[] = [
    {nome: "Camiseta", estoque: 5},
    {nome: "Calça", estoque: 0},
    {nome: "Tênis", estoque: 2},
    {nome: "Bon[e", estoque: 0}
];

let disponiveis = produtos.filter(produto => produto.estoque > 0);

console.log(disponiveis);

//Filtrando elementos que começam com uma letra
let nomes = ["Ana", "João", "Maria", "Carlos", "Amanda"];

let comA = nomes.filter(nome => nome.startsWith("A"));

console.log(comA);

//Removendo valores null ou undefined
let valores1: (number | null | undefined)[] = [10, null, 25, undefined, 40, null];

let filtrados = valores.filter(v => v !== null && v !== undefined);

console.log(filtrados);

//Filtrando palavras que contem uma substring
let palavras1 = ["javascript", "typescript", "java", "python", "csharp"];

let comJava = palavras.filter(p => p.includes("java"));

console.log(comJava);

//Exercícios
