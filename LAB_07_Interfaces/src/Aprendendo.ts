//Sintaxe Básica Interface
interface Pessoa{
    nome: string;
    idade: number;
    profissao?: string;
}

const joao: Pessoa ={
    nome: "João",
    idade: 30,
    profissao: "Vetrinário",
}

const maria: Pessoa ={
    nome: "Maria",
    idade: 25,
    profissao: "Engenharia",
}

//Interface com Funções
interface Calculadora{
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
}

const minhaCalculadora: Calculadora ={
    somar(a, b){
        return a + b;
    },
    subtrair(a, b){
        return a - b;
    },
}

//Interfaces com Classes
interface Animal {
    nome: string;
    emitirSom(): void;
}

class Cachorro implements Animal{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    emitirSom(): void {
        console.log("Au Au");
    }
}

//Classe Date
//Iniciando objetos Date:
//Com uma data atual
const dataAtual = new Date();

//Com uma string
const dataNascimento = new Date("2005-01-29");
console.log(dataNascimento);

//Com valores numéricos
const dataEspecifica = new Date(2025, 3, 11);
console.log(dataEspecifica);

const dataComHora = new Date (2025, 3, 11, 15, 30, 0);
console.log(dataComHora);

//Conversões date para string(formatado)
const data1 = new Date();
console.log(data1.toString());
console.log(data1.toDateString());
console.log(data1.toDateString());
console.log(data1.toISOString());

//String para Data 
const dataISO = new Date ("2025-04-11T1:00:00Z");
const dataLocal = new Date ("2025-04-11T10:00:00");

//Usando formatos locais e internacionais 
const hoje = new Date();
console.log(hoje.toLocaleDateString());
console.log(hoje.toLocaleTimeString());

//Comparação e manipulação de datas
const data2 = new Date("2025-04-10");
const data3 = new Date("2025-04-11");

console.log(data2 < data3);

//Somando dias
const data4 = new Date();
data4.setDate(data1.getDate() + 5);
console.log(data4);