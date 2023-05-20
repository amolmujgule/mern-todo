const express = require("express")
require("dotenv").config({path:"./.env"})
const mongoose= require("mongoose")
const cors = require("cors")
const { addTodo, getTodos, updateTodo, deleteTodo } = require("./controllers/todoController")

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())
app.use(cors())

app.post("/todo/add", addTodo)
app.get("/todo", getTodos)
app.put("/todo/:id", updateTodo)
app.delete("/todo/:id", deleteTodo)
mongoose.connection.once("open", (err) => {
    if (err) {
        console.log(err);
    }else{
        console.log("MONGOOSE Connected");
        app.listen(5000,console.log("http://localhost:5000"))
    }
})
