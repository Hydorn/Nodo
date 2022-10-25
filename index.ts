import express from "express";
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

type products = {
    id: number;
    name: string;
    brand: string;
    price: number
}

const product :Array<products>= [{id:1234,name:"Juan",brand:"ADIDAS", price:666}];

app.get("/product",(req,res)=>{
    res.json(product);
});

app.post("/product", (req, res) => {
    const { name, brand , price} = req.body;
    try {
      if (!name && !brand && !price) throw new Error("Need name brand and price");
      product.push({ id: new Date().getTime(), name, brand, price });
      res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
});

app.put("/product", (req, res) => {
    const { name, brand, id , price} = req.body;    
    const index = product.findIndex((product) => product.id === id);
    if (!index) product[index] = {name, brand, id, price};
    res.status(200).json(product[index]);
  });

app.delete("/product",(req,res)=>{
    let deleted:number;
    const {id} = req.body;
    const index = product.findIndex((product) => Number(product.id) === Number(id));
    if(index!=-1){
      deleted = Number(product.splice(index,1));
    }
    res.status(200).json(deleted);

})

app.listen(3000);