//requiero desde el express el metodo Router que sirve para crear nuevas rutas
const {Router} = require('express');
const router = Router();

//defino una constante con la ruta de cada Json 
const product = require('../ecommerce-api-master/product/all.json');
const product_info_url = require('../ecommerce-api-master/product/5678.json');
const commentProduct= require('../ecommerce-api-master/product/5678-comments.json');
const cart = require('../ecommerce-api-master/cart/654.json');
const category = require('../ecommerce-api-master/category/all.json');
const categoryInfo = require('../ecommerce-api-master/category/1234.json');


//cuando entro al chrome por el servido y escribo "/product" me trae un json 
router.get('/product',(req,res)=>{
  res.json(product);
});

router.get('/product-info',(req,res)=>{
res.json(product_info_url);
});

router.get('/comment-product',(req,res)=>{
res.json(commentProduct);
});

router.get('/cart',(req,res)=>{
res.json(cart);
});

router.get('/category',(req,res)=>{
res.json(category);
});

router.get('/category-info',(req,res)=>{
res.json(categoryInfo);
});



// exporto el archivo para poder usarlo
module.exports=router;