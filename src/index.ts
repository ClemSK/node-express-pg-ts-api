import express from 'express';
import indexRoutes from './routes/index';
import bodyParser from 'body-parser';

const app = express();

app.use(indexRoutes);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// delete these after issue with undefined post request?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);
console.log('Server on port', 3000);
