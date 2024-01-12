const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/connectDB")
const mongoose = require("mongoose")
const Task = require("./model/taskModel")
const taskRoute = require("./routes/taskRoutes")


const app = express()

//Route to Home Page
app.get("/", (req, res)=>{
    res.send("<h1>Welcome To Home Page </h1>");
})

//MiddleWare
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(taskRoute)


//Port on which our server is running on
const PORT = process.env.PORT || 5000
//Starting the server only when the database has been connected option 1
const startserver = async ()=> {
    try {
        await connectDB();
        app.listen(PORT,() =>{
            console.log(`Server running on port: ${PORT} !!!`);
        })
    } catch (error) {
        console.log(error);
    }

}
startserver();
