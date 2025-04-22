import { Livro } from "./Livro";
import { Produto } from "./Produto";
import { Cliente } from "./Cliente";
import { isNumberObject } from "util/types";
import { Numeros } from "./Numeros";

//Exercício 1
interface Funcionario{
    nome: string;
    idade: number;
    registro: number;
    salario: number;
    dataNascimento: Date;
    ativo: boolean;
}

const funcionario: Funcionario = {
    nome: "Pedro",
    idade: 19,
    registro: 123456789,
    salario: 1700,
    dataNascimento: new Date("2005-06-03"),
    ativo: true
};

console.log("\n", funcionario);

//Exercício 1 certo

//Exercício 2
const livro4 = new Livro("Harry Potter", "A menina lá", 2012);

livro4.mostrarLivros();
//Exercício 2 certo

//Exercício 3
const produto1 = new Produto(1, "Doritos", 16);

produto1.mostrarProduto();
//Exercício 3 certo

//Exercício 4
interface Animal{
    nome:string;
    tipo: string;
}

function criarAnimal(a: Animal): string{
    const Gato: Animal = {
        nome: "Gato",
        tipo: "Felino"
    }
    return `\nO animal é: ${Gato.nome} e é do tipo ${Gato.tipo}`;
}

const teste: Animal = {
    nome: "a",
    tipo: "b"
}

console.log(criarAnimal(teste));
//Exercício 4 certo

//Exercício 5
export interface Endereco{
    rua: string;
    numero: number;
    cidade: string;
}

const EnderecoCliente: Endereco = {
    rua: "Avenida",
    numero: 25,
    cidade: "Guarujá"
}

const PedroCliente = new Cliente("Pedro", "123.456.789-24", EnderecoCliente);

console.log("\n",PedroCliente);
//Exercício 5

//Exercício 6
const lista = new Numeros();

lista.adicionar(10);
lista.adicionar(20);
lista.adicionar(30);
lista.mostrarValores();

console.log("\nMédia:", lista.media());

lista.removerUltimo();
lista.mostrarValores();

console.log("\nMédia atualizada:", lista.media());
//Exercício 6