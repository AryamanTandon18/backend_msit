import express from 'express'
import { getAllProducts, newProduct } from '../controllers/product.js';

const router = express.Router();

router.get("/getAll",getAllProducts);
router.post("/new",newProduct);

export default router