"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saldoGet = exports.transferenciaPost = exports.transferenciaGet = exports.transacoesGet = exports.loginPost = exports.loginGet = void 0;
var clienteBdModel_1 = require("../models/clienteBdModel");
var contaBdModel_1 = require("../models/contaBdModel");
var ContaCorrentes_1 = require("../ContaCorrentes");
var Clientes_1 = require("../Clientes");
var app_1 = require("../app");
var transferenciaGet = function (request, response) {
    response.render("transferencia", { usuario: app_1.usuario });
};
exports.transferenciaGet = transferenciaGet;
var transferenciaPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var clienteOrigemBD, contaOrigemBD, clienteOrigem, contaOrigem, contaDestinoBD, clienteDestinoBD, clienteDestino, contaDestino, resposta, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                return [4 /*yield*/, clienteBdModel_1.ClienteModel.findOne({ cpf: req.body.cpfUsuario })];
            case 1:
                clienteOrigemBD = _a.sent();
                return [4 /*yield*/, contaBdModel_1.ContaCorrenteModel.findOne({ cpfTitular: req.body.cpfUsuario })];
            case 2:
                contaOrigemBD = _a.sent();
                clienteOrigem = new Clientes_1.Clientes((clienteOrigemBD === null || clienteOrigemBD === void 0 ? void 0 : clienteOrigemBD.nomeCompleto) ? clienteOrigemBD === null || clienteOrigemBD === void 0 ? void 0 : clienteOrigemBD.nomeCompleto : "", (clienteOrigemBD === null || clienteOrigemBD === void 0 ? void 0 : clienteOrigemBD.cpf) ? clienteOrigemBD === null || clienteOrigemBD === void 0 ? void 0 : clienteOrigemBD.cpf : "");
                contaOrigem = new ContaCorrentes_1.ContaCorrentes(contaOrigemBD === null || contaOrigemBD === void 0 ? void 0 : contaOrigemBD.numero, contaOrigemBD === null || contaOrigemBD === void 0 ? void 0 : contaOrigemBD.agencia, clienteOrigem, contaOrigemBD === null || contaOrigemBD === void 0 ? void 0 : contaOrigemBD.saldo);
                return [4 /*yield*/, contaBdModel_1.ContaCorrenteModel.findOne({ numero: req.body.conta })];
            case 3:
                contaDestinoBD = _a.sent();
                return [4 /*yield*/, clienteBdModel_1.ClienteModel.findOne({ cpf: contaDestinoBD === null || contaDestinoBD === void 0 ? void 0 : contaDestinoBD.cpfTitular })];
            case 4:
                clienteDestinoBD = _a.sent();
                clienteDestino = new Clientes_1.Clientes(clienteDestinoBD === null || clienteDestinoBD === void 0 ? void 0 : clienteDestinoBD.nomeCompleto, clienteDestinoBD === null || clienteDestinoBD === void 0 ? void 0 : clienteDestinoBD.cpf);
                contaDestino = new ContaCorrentes_1.ContaCorrentes(contaDestinoBD === null || contaDestinoBD === void 0 ? void 0 : contaDestinoBD.numero, contaDestinoBD === null || contaDestinoBD === void 0 ? void 0 : contaDestinoBD.agencia, clienteDestino, contaDestinoBD === null || contaDestinoBD === void 0 ? void 0 : contaDestinoBD.saldo);
                contaOrigem.transferir(contaDestino, parseFloat(req.body.mount));
                contaOrigemBD.saldo = contaOrigem.getSaldo();
                contaDestinoBD.saldo = contaDestino.getSaldo();
                return [4 /*yield*/, (contaOrigemBD === null || contaOrigemBD === void 0 ? void 0 : contaOrigemBD.save())];
            case 5:
                _a.sent();
                return [4 /*yield*/, (contaDestinoBD === null || contaDestinoBD === void 0 ? void 0 : contaDestinoBD.save())];
            case 6:
                _a.sent();
                resposta = { contaOrigem: contaOrigem, contaDestino: contaDestino };
                res.redirect("saldo");
                return [3 /*break*/, 8];
            case 7:
                e_1 = _a.sent();
                res.send("erro");
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.transferenciaPost = transferenciaPost;
var saldoGet = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var contaUsuario, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, contaBdModel_1.ContaCorrenteModel.findOne({ cpfTitular: app_1.usuario.cpf })];
            case 1:
                contaUsuario = _a.sent();
                response.render("saldo", { saldoUsuario: contaUsuario === null || contaUsuario === void 0 ? void 0 : contaUsuario.saldo });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                response.send("erro");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.saldoGet = saldoGet;
var transacoesGet = function (request, response) {
    response.render("transacoes");
};
exports.transacoesGet = transacoesGet;
var loginPost = function (request, response) {
    app_1.usuario.cpf = request.body.senha;
    response.redirect("/transacoes");
};
exports.loginPost = loginPost;
var loginGet = function (request, response) {
    response.render("login");
};
exports.loginGet = loginGet;
