const express= require("express")
const  mongoose = require("mongoose")
const {connection} = require("./db")
var cors=require("cors")

const app=express()
const BookRouter = require("./Routes/books.route")
app.use(express.json())
app.use(cors())


app.use("/bookroute",BookRouter)


// for run server
app.listen(8000,async()=>{
    try {
   await connection   //from db.js
        console.log("<<<< connected to db >>>>")
        console.log("server is running on 8000 port")
        
    } catch (error) {
        console.log(error)
    }
})


