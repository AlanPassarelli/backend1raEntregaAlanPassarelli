import mongoose from "mongoose"

const URI="mongodb+srv://alangpassarelli:alanpassarelli@cluster0.4oxvxpc.mongodb.net/?retryWrites=true&w=majority"

await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000,
})
console.log("Base de datos conectada....")