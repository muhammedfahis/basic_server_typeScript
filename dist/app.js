"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var Add = function (a, b) { return a + b; };
app.get('/', function (req, res) {
    console.log(Add(5, 8));
    res.send('welcome to typescript');
});
app.listen(3001, function () { return console.log("server is running in 3001"); });
