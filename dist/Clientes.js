"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
var Clientes = /** @class */ (function () {
    function Clientes(nomeCompleto, cpf) {
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
    }
    Clientes.prototype.escreverPropriedades = function () {
        console.log(this.nomeCompleto);
        console.log(this.cpf);
    };
    Clientes.prototype.getnomeCompleto = function () {
        return this.nomeCompleto;
    };
    Clientes.prototype.setnomeCompleto = function (nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    };
    Clientes.prototype.getCpf = function () {
        return this.cpf;
    };
    Clientes.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    return Clientes;
}());
exports.Clientes = Clientes;
