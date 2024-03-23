import express from 'express';
import productController from '../controllers/productController.js';

const router = express.Router();

router.get('/get',productController.getProduct)
router.get('/get/:id',productController.getProductById)
router.post('/add',productController.createProduct)
router.put('/update/:id',productController.updateProduct)
router.delete('/delete/:id',productController.deleteProduct)



router.get('/getall',productController.getProductAndCatagory)
router.get('/getpag',productController.getPaginatedProducts)

export default router;