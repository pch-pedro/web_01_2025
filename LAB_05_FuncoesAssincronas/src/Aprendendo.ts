function concatenar (a:string, b:string): void{
    var op = a + " " + b;
    console.log("A operação efetuada resultou em: " + op);
}

function somar (a: number, b: number): void{
    var op = a + b;
    console.log("a operação efetuada resultou em: " +op);
}

function imprimir (value: any): void{
    console.log("A operação efetuad resultou em: " + value);
}

function concatenar1(a: string, b: string, callback: (param: string) => void): void{
    var op = a + " " + b;
    callback(op);
}

function somar1 (a: number, b: number, callback: (param: number) => void): void{
    var op = a + b;
    callback(op);
}

concatenar1("Hello", "World", imprimir);

somar1(2, 2, imprimir);

//Criando uma função temporizável 
console.log("Antes do setTimeout");
setTimeout(() => console.log("Executando o setTimeout"), 2000);
console.log("Depois do setTimeout");

//setInterval(() => console.log("Executando o setInterval"), 2000);

console.log("Depois do setInterval");

//Usando o clearTimeout e clearInterval
let frase: string = "Rodando o setTimeout";

let timeout = setTimeout(() => console.log("Rodando o setTimeout"), 2000);

frase = "Rodando o clearTimeout";

if(frase !== "Rodando o setTimeout"){
    clearTimeout(timeout);
    console.log(frase);
}

//usando o clearInterval para cancelar o setInterval
let contador: number = 0;

let interval = setInterval(() => {
    contador ++;
    console.log("Rodando o setInterval");
    if(contador === 3){
        console.log("Intervalo de 'Rodando o setInterval' cancelado após 3 execuções");
        clearInterval (interval);
    }
}, 500);

//Utilizando o sort
//Sintaxe básica so sort: array.sort([compareFunction])
//Exemplos: 
const numeros: number[] = [10, 2, 100, 5];

//Ordenando de forma crescente:
numeros.sort((a: number, b: number) => a - b);

//Ordenando de forma decrescente :
//numeros.sort((a: number, b: number) => b - a);

console.log(numeros);

//Ordenação de Objetos 
type Pessoa = {
    nome: string;
    idade: number;
}

const pessoas: Pessoa[] = [
    {nome: "João", idade: 30},
    {nome: "Maria", idade: 25}
];

//Ordenar por idade crescente
pessoas.sort((a: Pessoa, b: Pessoa) => a.idade - b.idade);

console.log(pessoas);

//Ordenar por nome (ordem alfabética)
pessoas.sort((a: Pessoa, b: Pessoa) => 
a.nome.localeCompare(b.nome));

console.log(pessoas);