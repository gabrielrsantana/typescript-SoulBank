"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.minhaRouter = void 0;
var express_1 = __importDefault(require("express"));
var contaController_1 = require("../controllers/contaController");
var router = express_1.default.Router();
exports.minhaRouter = router;
router.get('/login', contaController_1.loginGet);
router.post('/login', contaController_1.loginPost);
router.get('/transacoes', contaController_1.transacoesGet);
router.get('/transferencia', contaController_1.transferenciaGet);
router.post('/transferencia', contaController_1.transferenciaPost);
router.get('/saldo', contaController_1.saldoGet);
