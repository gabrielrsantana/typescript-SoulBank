"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrentes = void 0;
var Clientes_1 = require("./Clientes");
var ContaCorrentes = /** @class */ (function () {
    function ContaCorrentes(numero, agencia, titular, saldo) {
        this.numero = numero;
        this.agencia = agencia;
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaCorrentes.prototype.setTitular = function (novoValor) {
        if (novoValor instanceof Clientes_1.Clientes) {
            this.titular = novoValor;
        }
    };
    ContaCorrentes.prototype.getTitular = function () {
        return this.titular;
    };
    ContaCorrentes.prototype.getSaldo = function () {
        return this.saldo;
    };
    ContaCorrentes.prototype.sacar = function (valor) {
        if (this.possuiSaldo(valor)) {
            this.saldo -= valor;
            return valor;
        }
    };
    ContaCorrentes.prototype.depositar = function (valor) {
        if (valor <= 0) {
            return;
        }
        this.saldo += valor;
    };
    ContaCorrentes.prototype.transferir = function (contaDestino, valor) {
        if (this.possuiSaldo(valor)) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
    };
    ContaCorrentes.prototype.possuiSaldo = function (valor) {
        return this.saldo >= valor;
    };
    return ContaCorrentes;
}());
exports.ContaCorrentes = ContaCorrentes;
