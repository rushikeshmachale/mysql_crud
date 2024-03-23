import express from 'express';

import controller from '../controllers/catagoryController.js';

const router = express.Router();

router.get('/get',controller.getAllCatagories)
router.get('/get/:id',controller.getCatagoryById)

router.post('/add',controller.createCatagory)
router.put('/update/:id',controller.updateCatagoryById)
router.delete('/delete/:id',controller.deleteCatagoryById)


export default router;