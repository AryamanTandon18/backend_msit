import Product from "../models/product.js";

export const newProduct = async(req,res)=>{
 const product = await Product.create(req.body);
 res.status(200).json({
    success:true,
    product,
 })
}

export const getAllProducts = async(req,res)=>{
    const product = Product.find();
    res.status(200).json({
        success:true,
        message:"here are all the users",
        product,
     })
}
 
