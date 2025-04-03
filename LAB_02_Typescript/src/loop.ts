for (let i:number = 0; i < 5; i++){
    console.log(`Iteração ${i}`);
}

let contador:number = 0;
while (contador < 5){
    console.log(`Iteração: ${contador}`);
    contador++;
}

let numero:number = 5;
do{
    console.log(`Iteração: ${numero}`);
    numero++;
}while (numero < 5);

const numeros2 = [10,20,30,40];
for (const num of numeros2){
    console.log(`Número: ${num}`);
}

const pessoa = {nome: "Alice", idade: 25, cidade: "Sã Paulo"};
for (const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`);
}