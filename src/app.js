import express from "express"
import viewRouter from "./routes/view.router.js"
import productRouter from "./routes/products.router.js"
import cartRouter from "./routes/cart.router.js"
import {__dirname} from "./utils.js"
import handlebars from "express-handlebars"

import {Server} from "socket.io"

const app=express()
const PORT =8089
console.log(__dirname)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+"/public"))

app.engine("handlebars",handlebars.engine())
app.set("view engine","handlebars")
app.set("views",__dirname+"/views")

app.use("/api",productRouter)
app.use("/api",cartRouter)
app.use("/",viewRouter)


const httpServer=app.listen(PORT,()=>{
    console.log("Server is working ")
}) 

const socketServer= new Server(httpServer)

import ProductManager from "./managers/productManager.js"
const pmanagersocket=new ProductManager(__dirname+"/files/products.json")
socketServer.on("connection",async(socket)=>{
    console.log("client connected con ID:", socket.id)

    const listadeproductos=await pmanagersocket.getProducts({})

    socket.emit("products", listadeproductos)

})

