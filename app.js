const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const router = express.Router();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin,"*"');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
    
});
 
//settings

//en caso de que exista un puerto definido que lo use sino que use el puerto 3000
app.set('port', process.env.PORT || 3000);
//esta linea es para ver cuando se imprime en chrome los json mas ordenados
app.set('json spaces',2) 



//midlewares

//con "morgan" vemos x consola lo que llega al servidor en el servidor
app.use(morgan('dev'));
//se define para recibir y enteder formatos json
app.use(express.json());
//con esta linea entedemos los datos que llegan de los input de formularios (no imagen)
app.use(express.urlencoded({ extended: false }));




//routes

app.use('/',router)
app.use(require('./routes/routes'));
app.use(require('./routes/carrito'));


router.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  app.use(express.static(__dirname + '/'));
});

//iniciamos el servidor   

app.listen(app.get('port'), () => {
    console.log('servidor iniciado, puerto:', app.get('port'));
})



//instalamos nodemon(npm i nodemon -D)
//desinstlar nodemon(npm uninstall nodemon)
//iniciar servidor (npm run dev)--> archivo package.json(comando "dev" ejecuta nodemon src/app.js)    