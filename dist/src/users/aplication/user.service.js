"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../../database/mysql/aplication/mysql");
class UserService {
    constructor() {
        this.connection = new mysql_1.DBMysql();
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.connection.query(`select * from users where id = ${id}`);
        });
    }
}
exports.default = new UserService();
