"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterApp = void 0;
const express_1 = __importDefault(require("express"));
const users_router_1 = __importDefault(require("./users/users.router"));
class RouterApp {
    constructor(app) {
        this.path = '/';
        this.router = express_1.default.Router();
        this.app = app;
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.app.use(users_router_1.default.path, users_router_1.default.router);
    }
}
exports.RouterApp = RouterApp;
