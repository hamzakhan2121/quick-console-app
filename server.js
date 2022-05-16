const express = require("express");
const app = require("./app")

port = 4000
app.set("view engine","ejs")
app.use(express.static(__dirname + '/public'))
app.get("/",function(req,res){
    res.render("./pages/home")
});


app.listen(port,()=>{
    console.log(`server is running on Port: ${port}`)
})