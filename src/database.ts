import { Pool } from 'pg';

export const pool = new Pool({
  user: 'clementseconde-kynnersley',
  host: 'localhost', //   add service for hosting here
  password: '', // leave this blank if there is no password
  database: 'typescriptdatabase',
  port: 5432,
});
