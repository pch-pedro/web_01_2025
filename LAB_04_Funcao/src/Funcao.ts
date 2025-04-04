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