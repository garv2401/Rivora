const router=require('express').Router();
const ethnicPCtrl=require('../controllers/ethnicPCtrl');


router.route('/ethnicProducts')
.get(ethnicPCtrl.getProducts)
.post(ethnicPCtrl.createProduct)

router.route('/products/:id')
.delete(ethnicPCtrl.deleteProduct)
.put(ethnicPCtrl.updateProduct)

module.exports=router