export class DateUtils{
    data: Date;
    formato: string;
    data2?: Date;

    constructor(data: Date, formato: string, data2: Date){
        this.data = data;
        this.formato = formato;
        this.data2 = data2;
    }

    formatarData(data: Date, formato: string): string{
        if(this.formato === "dd/mm/yyyy"){
            let dia = String(this.data.getDate()).padStart(2,'0');
            let mes = String(this.data.getMonth() + 1).padStart(2, '0');
            let ano = this.data.getFullYear();
            return `${dia}/${mes}/${ano}`;
        }
        else{
            let dia = String(this.data.getDate()).padStart(2,'0');
            let mes = String(this.data.getMonth() + 1).padStart(2, '0');
            let ano = this.data.getFullYear();
            return `${ano}-${mes}-${dia}`;
        }
    }

    diferencaEmDias(): number {
        if (!this.data2) {
            throw new Error("A segunda data (data2) não foi fornecida.");
        }

        const tempo1 = this.data.getTime();
        const tempo2 = this.data2.getTime();
        const diferencaMs = Math.abs(tempo1 - tempo2);
        const diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

        return diferencaDias;
    }

    adicionarDias(data: Date, dias: number): Date {
        const novaData = new Date(data);
        novaData.setDate(novaData.getDate() + dias);
        return novaData;
    }

    ehFinalDeSemana(data: Date): boolean{
        let finalSemana: boolean = false;
        let Verificando: number;
        Verificando = this.data.getDay();
        if(Verificando === 0 || Verificando === 6){
            finalSemana = true;
        }
        return finalSemana;
    }

    converterParaISO(date: Date): string {
        const ano = date.getFullYear();
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const dia = String(date.getDate()).padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }

    calcularIdade(dataNascimentoStr: string): number {
        const hoje = new Date();
        const nascimento = new Date(dataNascimentoStr);
    
        let idade = hoje.getFullYear() - nascimento.getFullYear();
    
        const mesAtual = hoje.getMonth();
        const diaAtual = hoje.getDate();
        const mesNascimento = nascimento.getMonth();
        const diaNascimento = nascimento.getDate();
    
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }
    
        return idade;
    }
}