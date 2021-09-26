"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schemaCliente = new mongoose_1.default.Schema({
    nomeCompleto: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    }
});
exports.ClienteModel = mongoose_1.default.model('Cliente', schemaCliente);
