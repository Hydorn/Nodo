import bodyParser from "body-parser";
import express from "express";
const app = express();
type products = {
    id: number;
    name: string;
    brand: string;
}
app.use(bodyParser.json());
const product :Array<products>= [{id:1234,name:"Juan",brand:"ADIDAS"}];

app.get("/product",(req,res)=>{
    res.json(product);
});

app.post("/product", (req, res) => {
    const { name, brand } = req.body;
    try {
      if (!name && !brand) throw new Error("che pasame el name y marca");
      product.push({ id: new Date().getTime(), name, brand });
      res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
});

app.put("/product", (req, res) => {
    const { name, brand, id } = req.body;    
    const index = product.findIndex((product) => product.id === id);
    if (!index) product[index] = {name, brand, id};
    res.status(200).json(product[index]);
  });

app.delete("/product",(req,res)=>{
    const { name, brand, id } = req.body;    
    const index = product.findIndex((product) => product.id === id);
    res.status(200).json(product[index]);
})
app.listen(3000);