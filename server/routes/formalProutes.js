const router=require('express').Router();
const formalPCtrl=require('../controllers/formalPCtrl');


router.route('/formalProducts')
.get(formalPCtrl.getProducts)
.post(formalPCtrl.createProduct)

router.route('/products/:id')
.delete(formalPCtrl.deleteProduct)
.put(formalPCtrl.updateProduct)

module.exports=router