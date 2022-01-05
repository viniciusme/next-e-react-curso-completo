"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
var pessoa = {
    nome: "João",
    idade: 27,
    saudar: function (sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: "Jonas", idade: 27, xyz: true });
pessoa.saudar("Skywalker");
// Usando Classes...
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function (base, exp) {
    // Math.power(3, 10)
    // 3 ** 10
    return Math.pow(3, 10);
};
console.log(potencia(3, 10));
console.log(potencia(2, 10));
