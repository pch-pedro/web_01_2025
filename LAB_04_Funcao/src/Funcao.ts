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
//Exercício 1
//Criando uma função completa para converter palavras minúsuclas em maiúsculas
function maiuscula(f: string): string{
    let maisucula = f.toUpperCase();
    return maisucula;
}

//Testando função
console.log(maiuscula("casa"));

let maiusculaV: string; 

//Criando uma função lambda para transformar palavras minúsculas em maiúsculas
const maiusculaLambda = (palavra2: string): string => palavra2.toUpperCase();

console.log("Conversão de uma palavra minúscula em maiúscula através da lambda: ",maiusculaLambda("casa"));

//Exercício 1 certo 

//Exercício 2
//Criando uma função lambda que retorna o resultado de uma multiplicação 
const multiplicarLambda = (a: number, b: number): number => a*b;

//Testando a função
console.log(multiplicarLambda(5,2));

//Exercício 2 certo

//Exercício 3
//Criando um função para dobrar os valores de um vetor
const dobrarNumeros = (a: number []): number [] => {
    for(let i: number = 0; i < a.length; i++){
        a[i] = a[i]*2;
    }
    return a;
}

//Criando um vetor e atribuindo valores a ele: 
let vetorNumeros: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Exibindo o vetor antes de modificar
console.log("O vetor antes de dobrar é: ", vetorNumeros);

//Testando a função
console.log("O vetor depois de dobrar é: ", dobrarNumeros(vetorNumeros));

//Exercício 3 certo

//Exercício 4
type Funcionario = {
    nome: string;
    cargo: string;
};

const funcionarios: Funcionario[] = [
    {nome: "Marcos", cargo: "Desenvolvedor"},
    {nome: "Fernanda", cargo: "Gerenete"},
    {nome: "Carlos", cargo: "Desenvolvedor"},
    {nome: "Joana", cargo: "Analista"}
];
const cargoDesejado: string = "Desenvolvedor";

let SelecaoFuncionarios: Funcionario [] = [];
let IndexSelecao: number = 0;

//Criando uma função para retornar o funcionário com o cargo desejado: 
const CargoDesejado = (a: Funcionario []): Funcionario [] => {
    for(let i: number = 0; i < a.length; i++){
        if(a[i].cargo === cargoDesejado){
            SelecaoFuncionarios[IndexSelecao] = a[i];
            IndexSelecao++;
        }
    }
    return SelecaoFuncionarios;
}

console.log(CargoDesejado(funcionarios));

//Exercício 4 certo

//Exercício 5
type Aluno ={
    nome: string;
    nota: number;
};

const alunos: Aluno[] = [
    {nome: "Alice", nota: 8},
    {nome: "Bruno", nota: 5},
    {nome: "Carla", nota: 7},
    {nome: "Daniel", nota: 6}
];

const AlunosAprovados = (a: Aluno []): Aluno [] => {
    let Aprovados: Aluno [] = [];
    let indexAprovados: number = 0;
    for(let i: number = 0; i < a.length; i++){
        if(a[i].nota >= 7){
            Aprovados[indexAprovados] = a[i];
            indexAprovados++;
        }
    }
    return Aprovados;
}

console.log("\nOs alunos aprovados são: ", AlunosAprovados(alunos));

//Exercício 5 certo

//Exercício 6
type Evento = {
    nome: string;
    mes: string;
};

const eventos: Evento[] = [
    {nome: "Workshop Typescript", mes: "Janeiro"},
    {nome: "Hackathon", mes: "Março"},
    {nome: "Conferência de IA", mes: "Janeiro"}
];

const mesDesejado: string = "Janeiro";

//Criando uma função para retornar os eventos correspondentes com o mes desejado
const EventosDesejados = (a: Evento []): Evento [] => {
    let EventosJaneiro: Evento [] = [];
    let indexEventosJaneiro: number = 0;
    for(let i: number = 0; i < a.length; i++){
        if(a[i].mes === mesDesejado){
            EventosJaneiro[indexEventosJaneiro] = a[i];
            indexEventosJaneiro++;
        }
    }
    return EventosJaneiro;
}

console.log("\nOs eventos em Janeiro são: ", EventosDesejados(eventos));

//Exercício 6 certo