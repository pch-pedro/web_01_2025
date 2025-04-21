export class Carro{
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarCarro(): void{
        console.log(
            `\nMarca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
        );
    }
}