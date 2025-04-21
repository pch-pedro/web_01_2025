import { DateUtils } from "./DateUtils";

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

const hoje1 = new Date();
const dataReferencia = new Date("2025-04-01");
const utils = new DateUtils(hoje1, "dd/mm/yyyy", dataReferencia);

console.log("\nUsando o Formatar Data:",utils.formatarData(hoje1, "dd/mm/yyyy"));
console.log("\nPegando a Diferença em Dias:",utils.diferencaEmDias());
console.log("\nAdicionando 10 dias:",utils.adicionarDias(hoje1, 10));
console.log("\nVerificando se é final de semana:",utils.ehFinalDeSemana(hoje1));
console.log("\nConvertendo a data em ISO:",utils.converterParaISO(hoje1));
console.log("\nDescobrindo a idade da pessoa:",utils.calcularIdade("2005-06-03"));

//Exercício 2:
interface Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

const Livro2: Livro ={
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
}

const Livro3: Livro ={
    titulo: "Cem anos de Solidão",
    autor: "Gabriel García Márquez",
    anoPublicacao: 1967,
}

console.log("\nO primeiro livro é: ",Livro2);
console.log("\nO segundo livro é: ",Livro3);

//Exercício 2 certo

//Exercício 3
interface Veiculo{
    marca: string;
    modelo: string;
    ligar(): void
}

class Carro2 implements Veiculo{
    marca: string;
    modelo: string;
    anoFabricacao: string;

    constructor(marca: string, modelo: string, anoFabricacao: string){
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
    }

    ligar(): void {
        console.log("\nCarro ligado");
    }
}

const carroLegal = new Carro2 ("Chevrolet", "Corvette", "2025-06-03");
carroLegal.ligar();

console.log("\n",carroLegal);