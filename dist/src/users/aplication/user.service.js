"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    getUserById(id) {
        console.log(id);
        return {
            id: 1,
            email: 'email@email.es',
            password: '123123',
            createdAt: 'ayer',
            updatedAt: 'hoy'
        };
    }
}
exports.UserService = UserService;
