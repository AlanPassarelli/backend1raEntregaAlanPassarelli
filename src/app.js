import express from "express"
import productRouter from "../routes/products.router.js"
import cartRouter from "../routes/cart.router.js"
const app= express()
const PORT =8085

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.Router())
app.use("/api",productRouter)
app.use("/api",cartRouter)

app.listen(PORT,()=>{
    console.log("Server is working ")
}) 