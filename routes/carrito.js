
const {Router}= require('express');
const router = Router();
const envios = require('../ecommerce-api-master/envio/envios.json')




router.get('/envio',(req,res)=>{
res.json(envios);
});

router.post('/',(req,res)=>{
let calle=req.body.calleS;
let  numero = req.body.numeroS;
toString(numero);
let esquina = req.body.esquinaS;
const newEnvio = {...req.body};
envios.push(newEnvio);
res.json(envios);
console.log(envios)

});

 
module.exports=router;