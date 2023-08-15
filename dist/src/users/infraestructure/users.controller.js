"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../aplication/user.service");
class UserController {
    constructor() {
        this.register = (req, res) => {
            const user = this.userService.getUserById(1);
            res.send(user);
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.default = new UserController();
