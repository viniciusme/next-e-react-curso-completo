// String
let nome: string = "João";
console.log(nome);

// Numbers
let idade: number = 27;
idade = 27.5;
console.log(idade);

// Boolean
let possuiHobbies: boolean = false;
console.log(possuiHobbies);

// Tipos Explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = "Idade é 2";

// Array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
console.log(hobbies);

// Tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);

// Enums
enum Cor {
  Cinza, //0
  Verde = 100, //1
  Azul = 10, //2
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// Any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
