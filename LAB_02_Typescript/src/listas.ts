//Lista de números
let listaNumeros: number[] = [1, 2, 3, 4, 5];

//Lista de Strings:
let nomes: string[] = ["Ana", "João", "Maria"];
let posicaoJoao: number = nomes.indexOf("João");
console.log(posicaoJoao);
nomes.splice (posicaoJoao, posicaoJoao);
console.log(nomes);

//Lista genérica (usando Array <tipo>)
let idades: Array<number> = [20,30,40];

//lista com tipos mistos (usando Union Types)
let misto: (number | string) [] = [1, "dois", 3, "quatro"];

let fruits: string[] = ["Maçã", "Banana"];
fruits.push("Laranja"); //Adiciona no final
fruits.unshift("Uva"); //Adiciona no Início

fruits.pop(); //Remove o último elemento ("Laranja")
fruits.shift(); //Remove o primeiro elemento ("Uva")

console.log(fruits[0]); //"Maçã"
console.log(fruits.length); //2