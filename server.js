const express = require("express");

const app = express();

app.get("/", (req,res) =>{
    res.send("This is the homepage");
});

app.get("/about", (req,res) =>{
    res.send("This is the about section");
});

app.get("/student", (req,res) =>{
    res.send("This is the student section");
})

app.get("/student/:id", (req,res) => {
    res.send("7");
})

app.listen(3000, () =>{
    console.log("Server ruuning at 3000")
})