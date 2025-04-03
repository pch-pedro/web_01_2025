// 1
//criando um array do tipo número e atribuindo valores a ele:
let Idades: number [] = [10, 15, 20, 8, 17, 25];

// criando um loop for para percorrer o array e ir imprimindo:
for (let i: number = 0; i < Idades.length; i++){
    if (Idades[i] < 12){
        console.log(`Criança`);
    }
    else if (Idades[i] >= 12 && Idades[i] < 18){
        console.log(`Adolescente`);
    }
    else{
        console.log(`Adulto`);
    }
}

//ExercicioCerto

//2
// inicializando um Array e atribuindo nomes a ele:
let Nomes: string [] = ["Carlos", "Ana", "Pedro", "Mariana"];

//criando uma variável para armazenar a posição do nome Pedro:
let PosicaoPedro: number = Nomes.indexOf("Pedro");

//Eliminando o nome Pedro da lista: 
Nomes.splice(PosicaoPedro, PosicaoPedro);

//Adicionando o nome João no final do Array:
Nomes.push("João");

//Adicionando o nome Beatriz no começo do Array:
Nomes.unshift("Beatriz");

//Criando um laço para imprimir todos os nomes do Array
for (let i: number = 0; i < Nomes.length; i++){
    console.log(`\n${Nomes[i]}`);
}

//ExercicioCerto

//3
// Inicializando um array misto com alguns valores: 
let ListaMista: (number | string) [] = [1, "Maçã", 2, "Banana", 3, "Laranja"];

// Inicializando dois arrays vazios:
let Numeros: number [] = [];
let Frutas: string [] = [];

//Usando um laço for para separar os números e strings da Lista Mista para os arrays Numeros e Frutas: 
let IndexNumeros: number = 0;
let IndexFrutas: number = 0;
for (let i: number = 0; i < ListaMista.length; i++){
    if(typeof(ListaMista[i]) === "number"){
        Numeros[IndexNumeros] = ListaMista[i] as number;
        IndexNumeros++;
    }
    else{
        Frutas[IndexFrutas] = ListaMista[i] as string;
        IndexFrutas++;
    }
}

//Usando um laço para imprimir os Arrays separados: 
for(let i: number = 0; i < Numeros.length; i++){
    console.log(`\n${Numeros[i]}`);
}
for(let i:number = 0; i < Frutas.length; i++){
    console.log(`\n${Frutas[i]}`);
}

//ExercicioCerto

//Exercicios Lab3

//Criando um Array do tipo números e atribuindo valores a ele: 
let ArrayNumeros: number [] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91];

//Criando dois Arrays para separar pares e impares: 
let ArrayNumerosPares: number [] = [];
let ArrayNumerosImpares: number [] = [];

//Criando um loop para separar os valores do ArrayNumeros nos seus respctivos Arrays:
let IndexArrayNumerosPares:number = 0;
let IndexArrayNumerosImpares:number = 0;
for (let i:number = 0; i < ArrayNumeros.length; i++){
    if(ArrayNumeros[i]%2 == 0){
        ArrayNumerosPares[IndexArrayNumerosPares] = ArrayNumeros[i] as number;
        IndexArrayNumerosPares++;
    }
    else{
        ArrayNumerosImpares[IndexArrayNumerosImpares] = ArrayNumeros[i] as number;
        IndexArrayNumerosImpares++;
    }
}

//Criando um loop para exibir os Arrays de numeros pares e impares:
for(let i:number = 0; i < ArrayNumerosPares.length; i++){
    console.log(`\n ${ArrayNumerosPares[i]} - Par`);
}
for(let i:number = 0; i < ArrayNumerosImpares.length; i++){
    console.log(`\n ${ArrayNumerosImpares[i]} - Impar`);
}