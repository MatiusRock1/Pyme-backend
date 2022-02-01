const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
//setings
dotenv.config({
    path: path.resolve(__dirname,process.env.NODE_ENV + '.env')
});
app.set('port', process.env.PORT|| 3000);
//mongose
const indexRouters = require('./routers/index');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',indexRouters);
app.use(morgan('dev'));
app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
})
