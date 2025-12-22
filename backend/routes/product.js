const express = require('express');
const { getproducts, getSingleproducts,insertProduct } = require('../controllers/productcontroller');
const router=express.Router();

router.get('/product',getproducts);
router.get('/product/:id',getSingleproducts)
router.post('/product',insertProduct);

module.exports = router;
