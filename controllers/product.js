import ErrorHandler from "../middleWares/error.js";
import Product from "../models/product.js";
import {asyncHandler} from '../middleWares/AsyncErr.js'
import ApiFeatures from "../utils/apiFeatures.js";

export const newProduct = asyncHandler(async(req,res,next)=>{
   const product = await Product.create(req.body);
   res.status(201).json({
      success:true,
      product,
   })

});

export const getAllProducts = asyncHandler(async(req,res)=>{

   // const resultPerPage = 8;
   // const productsCount = await Product.countDocuments();
   const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter();

    let products = await apiFeature.query;

   //  let filteredProductsCount = products.length;
  
   //  apiFeature.pagination(resultPerPage);
  
   //  products = await apiFeature.query;

    res.status(200).json({
        success:true,
        message:"here are all the users",
        products,
      //   productsCount,
      //   resultPerPage,
      //   filteredProductsCount,
     })
});

export const updateProduct = asyncHandler(async(req,res,next)=>{
   let product  = await Product.findById(req.params.id);
   if(!product){
      return next(new ErrorHandler("Product not found",404));
   }
   product = await Product.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators: true,
      useFindAndModify:false

   });
   res.status(200).json({
      success:true,
      message:"product updated",
      product
   })
      
});
export const deleteProduct = asyncHandler(async (req, res) => {
   const product =  await Product.findById(req.params.id)
   if(product){
       await Product.findOneAndDelete(req.params.id);
       res.json({message : 'Product Removed'})
   } else{
      return next(new ErrorHandler("Product not found",404));
   }
})
 
export const getProductById = asyncHandler(async (req, res) => {
   const product =  await Product.findById(req.params.id)
   if(product){
       res.json(product)
   } else{
      return next(new ErrorHandler("Product not found",404));
   }
})

         