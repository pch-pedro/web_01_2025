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
//Exercício 1
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

//Colocando o vetor em ordem crescente:
ArrayNumerosPares.sort((a: number, b: number) => a-b);

ArrayNumerosImpares.sort((a: number, b: number) => a-b);

let Total: number = 0;
let TotalValor: number = 0;
let Media: number = 0;
let MaiorValor: number = ArrayNumerosPares[0];
let MenorValor: number = ArrayNumerosPares[0];

//Criando um loop para exibir os Arrays de numeros pares e impares:
for(let i:number = 0; i < ArrayNumerosPares.length; i++){
    console.log(`\n ${ArrayNumerosPares[i]} - Par`);
    Total ++;
    TotalValor += ArrayNumerosPares[i];
    if(ArrayNumerosPares[i] < MenorValor){
        MenorValor = ArrayNumerosPares[i];
    }
    if(ArrayNumerosPares[i] > MaiorValor){
        MaiorValor = ArrayNumerosPares[i];
    }

}

Media = TotalValor/Total;

console.log(`\nA media do vetor de números pares é: ${Media}`);
console.log(`\nA soma de todos os valores do vetor de números pares é: ${TotalValor}`);
console.log(`\nO menor valor do array de números pares é: ${MenorValor}`);
console.log(`\nO maior valor do array de números pares é: ${MaiorValor}`);

Total= 0;
TotalValor = 0;
Media = 0;
MaiorValor = ArrayNumerosImpares[0];
MenorValor = ArrayNumerosImpares[0];

for(let i:number = 0; i < ArrayNumerosImpares.length; i++){
    console.log(`\n ${ArrayNumerosImpares[i]} - Impar`);
    Total ++;
    TotalValor += ArrayNumerosImpares[i];
    if(ArrayNumerosImpares[i] < MenorValor){
        MenorValor = ArrayNumerosImpares[i];
    }
    if(ArrayNumerosImpares[i] > MaiorValor){
        MaiorValor = ArrayNumerosImpares[i];
    }
}

Media = TotalValor/Total;

console.log(`\nA media do vetor de números impares é: ${Media}`);
console.log(`\nA soma de todos os valores do vetor de números impares é: ${TotalValor}`);
console.log(`\nO menor valor do array de números impares é: ${MenorValor}`);
console.log(`\nO maior valor do array de números impares é: ${MaiorValor}`);

//Exercício 1 certo

//Exercício 2:
//Inicilizando um array de strings com valores
let produtos: string [] = ["Arroz", "Feijão", "Leite", "Pão"]

//Trocando "Leite" por "Queijo"
let posicoaQueijo: number = produtos.indexOf("Leite");

produtos[posicoaQueijo] = "Queijo";

console.log("\n",produtos);

//Removendo o primeiro elemento da lista
produtos.shift();

console.log("\n",produtos);

produtos.push("Café");

console.log("\n",produtos);

//Exercício 2 certo

//Exercício 3
//criando um vetor misto e atribuindo valores 
let dados: (string | number) [] = [10, "Azul", 25, "Vermelho", 30, "Verde"];

//criando vetroes e variáveis para separação dos dados
let valoresNumericos: number [] = [];
let valorsTextuais: string [] = [];
let indexNumericos: number = 0;
let indexTextuais: number = 0;

//criando um loop for para separar os dados a medida que percorre o vertor
for (let i: number = 0; i < dados.length; i++){
    if(typeof(dados[i]) === "number"){
        valoresNumericos[indexNumericos] = dados[i] as number;
        indexNumericos++;
    }
    else{
        valorsTextuais[indexTextuais] = dados[i] as string;
        indexTextuais++;
    }
}

//imprimindo os vetores resultantes: 
console.log("\n",valoresNumericos);
console.log("\n",valorsTextuais);

//Exercício 3 certo

//Exercício 4
//Criando um vetor de números e atribuindo valores a eles
let arrayNumeros: number [] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120, 33, 47, 52];

//Criando vetores para separar os dados em categorias
let Multiplos3: number [] = [];
let Multiplos5: number [] = [];
let Outros: number [] = [];
let indexMultiplos3 = 0;
let indexMultiplos5 = 0;
let indexOutros = 0;
let MediaMultiplos = 0;
let MediaAritimetica = 0;
let SomaMultiplos = 0;

//Criando um for para percorrer o vetor de numeros e separa-los em suas categorias
for (let i: number = 0; i < arrayNumeros.length; i++){
    if(arrayNumeros[i]%5 == 0){
        Multiplos5[indexMultiplos5] = arrayNumeros[i];
        indexMultiplos5++;
    }
    else if(arrayNumeros[i]%3 == 0){
        Multiplos3[indexMultiplos3] = arrayNumeros[i];
        indexMultiplos3++;
    }
    else{
        Outros[indexOutros] = arrayNumeros[i];
        indexOutros++;
    }
}

let MaiorValorMultiplos = Multiplos3[0];
let MenorValorMultiplos = Multiplos3[0];
let valorTemporario: number = 0;

Multiplos3.sort((a: number, b: number) => a-b);
if(Multiplos3.length%2 === 0){
    let Ref: number = 0;
    Ref = Multiplos3.length/2;
    MediaMultiplos = (Multiplos3[Ref - 1] + Multiplos3[Ref])/2;
}
else{
    let Ref: number = Math.floor(Multiplos3.length/2);
    MediaMultiplos = (Multiplos3[Ref]);
}

//Calculando a soma do vetor de múltiplos de 3
for(let i: number = 0; i < Multiplos3.length; i++){
    SomaMultiplos += Multiplos3[i];
}

//Calculando a Média dos múltiplos de 3
MediaAritimetica = SomaMultiplos/Multiplos3.length;

//Pegando o maior valor do vetor
for(let i:number = 0; i < Multiplos3.length; i++){
    if(Multiplos3[i] > MaiorValorMultiplos){
        MaiorValorMultiplos = Multiplos3[i];
    }
}

//Pegando o menor valor do vetor
for(let i: number = 0; i < Multiplos3.length; i++){
    if(Multiplos3[i] < MenorValorMultiplos){
        MenorValorMultiplos = Multiplos3[i];
    }
}

//Ordenando o vetor de múltiplos de 3 em ordem decrescente
for(let i:number = 0; i < Multiplos3.length; i++){
    for(let i2:number = 0; i2 < Multiplos3.length - 1; i2++){
        if(Multiplos3[i2] < Multiplos3[i2 + 1]){
            valorTemporario = Multiplos3[i2];
            Multiplos3[i2] = Multiplos3[i2  + 1];
            Multiplos3[i2 + 1] = valorTemporario;
        }
    }
}
console.log("\nOs multiplos de 3 são:\n",Multiplos3);
console.log("\nA Mediana de múltiplos de 3 é: ", MediaMultiplos);
console.log("\nA Media de todos os valores múltiplos de 3 é: ", MediaAritimetica);
console.log("\nA soma de todos os valores múltiplos de 3 é: ", SomaMultiplos);
console.log("\nO maior valor de múltiplos de 3 é: ", MaiorValorMultiplos);
console.log("\nO menor valor de múltiplos de 3 é: ", MenorValorMultiplos);

MediaMultiplos = 0;
MediaAritimetica = 0;
SomaMultiplos = 0;
MaiorValorMultiplos = Multiplos5[0];
MenorValorMultiplos = Multiplos5[0];
valorTemporario = 0;

Multiplos5.sort((a: number, b: number) => a-b);
if(Multiplos5.length%2 === 0){
    let Ref: number = 0;
    Ref = Multiplos5.length/2;
    MediaMultiplos = (Multiplos5[Ref - 1] + Multiplos5[Ref])/2;
}
else{
    let Ref: number = Math.floor(Multiplos5.length/2);
    MediaMultiplos = (Multiplos5[Ref]);
}

//Calculando a soma do vetor de múltiplos de 3
for(let i: number = 0; i < Multiplos5.length; i++){
    SomaMultiplos += Multiplos5[i];
}

//Calculando a Média dos múltiplos de 3
MediaAritimetica = SomaMultiplos/Multiplos5.length;

//Pegando o maior valor do vetor
for(let i:number = 0; i < Multiplos5.length; i++){
    if(Multiplos5[i] > MaiorValorMultiplos){
        MaiorValorMultiplos = Multiplos5[i];
    }
}

//Pegando o menor valor do vetor
for(let i: number = 0; i < Multiplos5.length; i++){
    if(Multiplos5[i] < MenorValorMultiplos){
        MenorValorMultiplos = Multiplos5[i];
    }
}

//Ordendnaod o vetor de múltiplos de 5 em ordem decrescente
for(let i:number = 0; i < Multiplos5.length; i++){
    for(let i2:number = 0; i2 < Multiplos5.length - 1; i2++){
        if(Multiplos5[i2] < Multiplos5[i2 + 1]){
            valorTemporario = Multiplos5[i2];
            Multiplos5[i2] = Multiplos5[i2  + 1];
            Multiplos5[i2 + 1] = valorTemporario;
        }
    }
}

console.log("\nOs multiplos de 5 são:\n",Multiplos5);
console.log("\nA Mediana de múltiplos de 5 é: ", MediaMultiplos);
console.log("\nA Media de todos os valores múltiplos de 5 é: ", MediaAritimetica);
console.log("\nA soma de todos os valores múltiplos de 5 é: ", SomaMultiplos);
console.log("\nO maior valor de múltiplos de 5 é: ", MaiorValorMultiplos);
console.log("\nO menor valor de múltiplos de 5 é: ", MenorValorMultiplos);

MediaMultiplos = 0;
MediaAritimetica = 0;
SomaMultiplos = 0;
MaiorValorMultiplos = Outros[0];
MenorValorMultiplos = Outros[0];
valorTemporario = 0;

Outros.sort((a: number, b: number) => a-b);
if(Outros.length%2 === 0){
    let Ref: number = 0;
    Ref = Outros.length/2;
    MediaMultiplos = (Outros[Ref - 1] + Outros[Ref])/2;
}
else{
    let Ref: number = Math.floor(Outros.length/2);
    MediaMultiplos = (Outros[Ref]);
}

//Calculando a soma do vetor de múltiplos de 3
for(let i: number = 0; i < Outros.length; i++){
    SomaMultiplos += Outros[i];
}

//Calculando a Média dos múltiplos de 3
MediaAritimetica = SomaMultiplos/Outros.length;

//Pegando o maior valor do vetor
for(let i:number = 0; i < Outros.length; i++){
    if(Outros[i] > MaiorValorMultiplos){
        MaiorValorMultiplos = Outros[i];
    }
}

//Pegando o menor valor do vetor
for(let i: number = 0; i < Outros.length; i++){
    if(Outros[i] < MenorValorMultiplos){
        MenorValorMultiplos = Outros[i];
    }
}

//Ordenando o vetor Outros em ordem decrescente
for(let i:number = 0; i < Outros.length; i++){
    for(let i2:number = 0; i2 < Outros.length - 1; i2++){
        if(Outros[i2] < Outros[i2 + 1]){
            valorTemporario = Outros[i2];
            Outros[i2] = Outros[i2  + 1];
            Outros[i2 + 1] = valorTemporario;
        }
    }
}

console.log("\nOs multiplos de outros são: \n",Outros);
console.log("\nA Mediana de Outros é: ", MediaMultiplos);
console.log("\nA Media de todos os valores de Outros é: ", MediaAritimetica);
console.log("\nA soma de todos os valores de Outros é: ", SomaMultiplos);
console.log("\nO maior valor de Outros é: ", MaiorValorMultiplos);
console.log("\nO menor valor de Outros é: ", MenorValorMultiplos);