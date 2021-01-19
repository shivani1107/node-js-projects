var express = require('express');
var router = express.Router();

var products = require("../backend/controller/productController.js")
var users = require("../backend/controller/userController.js")
/* GET users listing. */
router.get('/products', products.getProducts);
router.post('/addproducts',products.addProducts);
router.put('/updateProducts',products.updateProducts);
router.delete('/deleteProduct',products.deleteProduct);

router.get('/users', users.getUsers);
router.post('/addUsers',users.addUsers);
router.put('/updateUsers',users.updateUser);
router.delete('/deleteUser',users.deleteUser);


module.exports = router;




// console.log("coming by /products")
// router.get('/', (req,res)=>{
//     res.send('lets check');
//   products.getProducts()
//   res.send(products.getProducts());
// });
