import { Aluno } from "./Aluno";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { Carro } from "./Carro";
import { Produto } from "./Produto";

const aluno1 = new Aluno("Carlos", 23, "ADS", "BTV1111");

aluno1.imprimir();

const livro1 = new Livro("A vida invisivel", "Adila", 2025, "Galera Records")

livro1.exibirDadoa();

const usuario1 = new Usuario("Pedro", "sp.pedro.pacheco23.3@gmail.com");

usuario1.boasVindas();

const carro = new Carro("Chevrolet", "Corvette", 2025);

carro.mostrarCarro();

carro.ano = 2024;

carro.mostrarCarro();

const prod = new Produto("Notebook", 3500);

prod.mostrarInformacoes();