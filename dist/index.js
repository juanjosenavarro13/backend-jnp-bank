"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./src/app");
dotenv_1.default.config();
const port = Number(process.env.PORT);
const app = new app_1.App(port !== null && port !== void 0 ? port : 3000);
app.start();
