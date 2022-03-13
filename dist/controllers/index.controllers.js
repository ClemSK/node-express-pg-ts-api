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
exports.createUser = exports.getUserById = exports.getUser = void 0;
const database_1 = require("../database");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM users');
        //   console.log(response.rows);
        return res.status(200).json(response.rows);
    }
    catch (err) {
        console.log('err', err);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getUser = getUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(req.params.id);
    //   res.send('received')
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getUserById = getUserById;
const createUser = (req, res) => {
    console.log('The request body is: ', req.body);
    //   const { name, email } = req.body;
    //   console.log(name, email);
    res.send('received');
};
exports.createUser = createUser;
// export const updateUser = (req: Request, res: Response): Promise<Response> => {
// }
// export const deleteUser = (req: Request, res: Response): Promise<Response> => {
// }
