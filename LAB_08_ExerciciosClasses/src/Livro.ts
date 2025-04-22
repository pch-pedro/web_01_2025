export class Livro{
    titulo:string;
    autor:string;
    ano:number;

    constructor(titulo:string, autor:string, ano:number){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    mostrarLivros(): void{
        console.log("\nO nome do livro é: ",this.titulo,"O nome do autor é: ",this.autor,"O ano de publicacao é: ",this.ano);
    }
}