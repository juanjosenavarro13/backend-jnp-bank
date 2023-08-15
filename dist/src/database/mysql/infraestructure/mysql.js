"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBMysql = void 0;
const mysql_1 = __importDefault(require("mysql"));
class DBMysql {
    constructor() {
        var _a, _b, _c, _d;
        this.host = (_a = process.env.MYSQL_DATABASE) !== null && _a !== void 0 ? _a : 'localhost';
        this.user = (_b = process.env.MYSQL_DATABASE) !== null && _b !== void 0 ? _b : 'root';
        this.password = (_c = process.env.MYSQL_DATABASE) !== null && _c !== void 0 ? _c : 'localhost';
        this.database = (_d = process.env.MYSQL_DATABASE) !== null && _d !== void 0 ? _d : 'prueba';
        this.connection = this.createConnection();
        this.connection.connect();
    }
    getConnection() {
        return this.connection;
    }
    createConnection() {
        return mysql_1.default.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
    }
}
exports.DBMysql = DBMysql;
