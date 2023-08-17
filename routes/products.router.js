import {Router} from "express"
import { __dirname } from "../utils.js"

import ProductManager from "../managers/productManager.js"

const manager=new ProductManager(__dirname+'/files/products.json')
const router=Router()


router.get("/products",async(req,res)=>{
    const listOfproducts= await manager.getProducts()
    res.json({message:"success",listOfproducts})
    // const {limit}=req.query
    // const products= await manager.getProducts()
    // if(limit){
    //  const limitproducts=products.slice(0,limit)
    //  res.json({status:"Success",limitproducts})

    // }
    // else{
    //     res.json({status:"Success",products})
    // }
})

router.get("/products/:pid",async(req,res)=>{
    // const pid=parseInt(req.params.pid)
    const {pid}=req.params

    const products= await manager.getProducts()
    const productfind=products.find(elemento=>elemento.id===parseInt(pid))
    console.log(productfind)
    res.send({status:"success",productfind})
})


export default router