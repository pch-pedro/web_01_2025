export class Produto{
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco:number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    mostrarProduto(): void{
        console.log("\nO id do produto é:", this.id,"O nome do produto é:", this.nome, "O preco do produto é:", this.preco)
    }
}