export class Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
    editora: string;

    constructor(titulo: string, autor:string, anoPublicacao:number, editora: string){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora;
    }

    exibirDadoa(): void{
        console.log(`\nO título do livro é: ${this.titulo}\nO autor do livro é: ${this.autor}\nO ano em que foi publicado foi: ${this.anoPublicacao}\nA editora do livro é: ${this.editora}`);
    }
}