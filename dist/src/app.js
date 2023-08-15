"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
class App {
    constructor(port) {
        this.port = port !== null && port !== void 0 ? port : 3000;
        this.app = (0, express_1.default)();
        this.routerApp = new router_1.RouterApp(this.app);
        this.config(this.port);
    }
    config(port) {
        this.app.set('port', port);
        this.app.use(express_1.default.json());
        this.app.use(this.routerApp.path, this.routerApp.router);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`✨Server listening in port ${this.port}✨`);
        });
    }
}
exports.App = App;
