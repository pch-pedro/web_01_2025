export class Produto{
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }

    mostrarInformacoes(): void{
        console.log(`\nO nome do produto é: ${this.nome} e seu preço é: ${this.preco}`);
    }
}