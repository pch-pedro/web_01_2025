export class Numeros{
    valores: number [] = [];

    constructor(valores: number [] = []){
        this.valores = valores;
    }

    adicionar(valor: number): void {
        this.valores.push(valor);
    }

    removerUltimo(): void {
        if (this.valores.length > 0) {
            this.valores.pop();
        } else {
            console.log("Não há valores para remover.");
        }
    }

    media(): number {
        if (this.valores.length === 0) {
            console.log("Nenhum valor disponível para calcular a média.");
            return 0;
        }
        const soma = this.valores.reduce((total, valor) => total + valor, 0);
        return soma / this.valores.length;
    }
    
    mostrarValores(): void {
        console.log("Valores atuais:", this.valores);
    }
}