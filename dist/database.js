"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'clementseconde-kynnersley',
    host: 'localhost',
    password: '',
    database: 'typescriptdatabase',
    port: 5432,
});
