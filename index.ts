import express, {Express,Request,Response} from 'express';
const morgan = require('morgan');
import apiRouter from './src/routes';

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.json());
app.use(apiRouter);

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})