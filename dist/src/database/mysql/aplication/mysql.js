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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBMysql = void 0;
const mysql_1 = __importDefault(require("mysql"));
class DBMysql {
    constructor() {
        var _a, _b, _c, _d;
        this.host = (_a = process.env.MYSQLHOST) !== null && _a !== void 0 ? _a : 'localhost';
        this.user = (_b = process.env.MYSQLUSER) !== null && _b !== void 0 ? _b : 'root';
        this.password = (_c = process.env.MYSQLPASSWORD) !== null && _c !== void 0 ? _c : '';
        this.database = (_d = process.env.MYSQLDATABASE) !== null && _d !== void 0 ? _d : 'bank';
        this.connection = this.createConnection();
        this.config = { host: this.host, user: this.user, password: this.password, database: this.database };
        this.connection.connect();
    }
    getConnection() {
        console.log('✨Conexion MYSQL✨');
        return this.connection;
    }
    query(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                this.connection.query(sql, function (err, rows) {
                    if (err != null)
                        reject(err);
                    resolve(rows);
                });
            });
        });
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
