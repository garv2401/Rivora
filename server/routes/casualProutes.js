const router=require('express').Router();
const casualPCtrl=require('../controllers/casualPCtrl');


router.route('/casualProducts')
.get(casualPCtrl.getProducts)
.post(casualPCtrl.createProduct)

router.route('/products/:id')
.delete(casualPCtrl.deleteProduct)
.put(casualPCtrl.updateProduct)

module.exports=router