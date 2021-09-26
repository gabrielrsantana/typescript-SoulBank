"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrenteModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schemaContaCorrente = new mongoose_1.default.Schema({
    numero: {
        type: Number,
        required: true,
    },
    agencia: {
        type: Number,
        required: true,
    },
    saldo: {
        type: Number,
        required: true,
    },
    cpfTitular: {
        type: String,
        required: true,
    },
});
exports.ContaCorrenteModel = mongoose_1.default.model('ContaCorrente', schemaContaCorrente);
