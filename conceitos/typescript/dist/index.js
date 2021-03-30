"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
// Inicializando o express no código
var app = express_1.default();
// Primeira rota
app.get('/', routes_1.default);
// Escutando o host na porta abaixo
app.listen(3333);
