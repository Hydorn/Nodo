import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.json({
        ema: "carlos",
        juan: true,
        pedro: 66,
    })
})
app.listen(3000);