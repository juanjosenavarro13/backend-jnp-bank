"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() {
        this.register = (req, res) => {
            res.send('Hello, world! registerss');
        };
    }
}
exports.default = new UserController();
