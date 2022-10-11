const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.json({
        hola: 35,
        chau: "cual es",
        no: true, 
    }).status(200);
});
//http.cat
app.get("/home",(req, res)=>{
    res.send("home mundo");
});
app.listen(3000)