export class Exercicio{
    static contarOcorrencia(a:string, b:string): void{
        let i: number = 0;
        let ini: number = a.indexOf(b);

        while (ini !== -1){
            i++;
            ini = a.indexOf(b, ini + b.length);
        }
        console.log("\nA quantidade de ocorrências de: ", b, "é", i);
    }
    static primeirasLetras(a:string): void{
        let limIni: number[] = [];
        a = a.trim();
        limIni.push(0);

        for(let i: number = 0; i < a.length; i++){
            if(a[i] === " " && a[i + 1] !== " " && i + 1 < a.length){
                limIni.push(i + 1);
            }
        }

        for(let index: number = 0; index < limIni.length; index++){
            index++;
        }

        for(let i: number = 0; i < limIni.length; i++){
            console.log("\nUma das letras iniciais é:", a[limIni[i]]);
        }
    }
    static removerVogais(){

    }
}