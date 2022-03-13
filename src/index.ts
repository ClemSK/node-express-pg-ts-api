import express from 'express';
import indexRoutes from './routes/index';
import bodyParser from 'body-parser';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRoutes); //put routes below the parser to make it work

app.listen(3000);
console.log('Server on port', 3000);
