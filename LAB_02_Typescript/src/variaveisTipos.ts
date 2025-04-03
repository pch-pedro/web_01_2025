let nome: string = "João"; //tipo de variável para texto
let idade: number = 25; //tipo de variável para inteiros e reais
let ativo: boolean = true; //tipo de variável para verdadeiro ou falso

let dado: any = 10; //tipo de variável que recebe qualquer coisa (Não recomendado)
let vazio: null = null; //Tipo de variável que recebe null

//console.log(vazio);

let indefinido: undefined = undefined;

//Tipo literal: Você define o que essa variável pode receber
let situacao: "ativo" | "inativo" = "ativo";

//União de Tipos
let idadeOuNull: number | null = null;

console.log(`Nome: ${nome}, Idade: ${idade}, Situação: ${situacao}`);

console.log(`O tipo da variável ativo é: ${typeof ativo}`); //typeof é um comando que mostra o tipo de uma variável

console.log("A Bianca é uma tonta");