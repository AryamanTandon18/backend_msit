import express from 'express'
import { deleteProduct, getAllProducts, getProductById, newProduct, updateProduct } from '../controllers/product.js';
import { authorizeRole, isAuthenticated } from '../middleWares/auth.js';

const router = express.Router();

router.get("/getAll",getAllProducts);
router.post("/new",isAuthenticated,authorizeRole("admin"),newProduct);
router.route("/product/:id")
.put(isAuthenticated,authorizeRole("admin"),updateProduct)
.delete(isAuthenticated,authorizeRole("admin"),deleteProduct)
.get(getProductById)

export default router