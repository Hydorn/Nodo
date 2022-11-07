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

const product :Array<products>= [ {id:1234,name:"Juan",brand:"ADIDAS", price:666},
                                  {id:111,name:"Juan",brand:"ADIDAS", price:666},
                                  {id:123,name:"Juan",brand:"ADIDAS", price:666},
                                  {id:1121,name:"Fernet",brand:"Branca", price:666},
                                  {id:1511,name:"Mayonesa",brand:"Natura", price:666},
                                  {id:11221,name:"Aceite",brand:"Cocinero", price:666},
                                  {id:157911,name:"Cerveza",brand:"Melorto", price:666},
                                  {id:511,name:"Chocolate",brand:"Milka", price:666},
                                  {id:55711,name:"Leche",brand:"Sancor", price:666},
                                  {id:15711,name:"Manteca",brand:"Milkaut", price:666},
                                  {id:55711,name:"Queso",brand:"La serenisima", price:666},
                                  {id:55711,name:"TV",brand:"SAMSUNG", price:666}];

app.get("/product/:page?",(req,res)=>{
  let filtered = product;
  //Search and filter
  let query = String(req.query.search).toLocaleLowerCase();
  
  if(!query){
    filtered = filtered?.filter(item=>{
      return (item.name.toLocaleLowerCase().includes(query)||
          item.brand.toLocaleLowerCase().includes(query));
    })
  }
  

  //Pagination
  let paginatedProducts: Array<products[]> = [];

  for(let i=0; i<product.length; i=i+5){
    paginatedProducts.push(filtered.slice(i,i+5));
  }

  //Page 
  let page = Number(req.params.page);

  //Response if page not specified
  if(!page) res.json(paginatedProducts[0]);
  else res.json(paginatedProducts[page])

});

app.post("/product", (req, res) => {
    const { name, brand , price} = req.body;
    try {
      if (!name) throw new Error("Need name");
      if (!brand) throw new Error("Need brand");
      if (!price) throw new Error("Need price");
      product.push({ id: new Date().getTime(), name, brand, price });
      res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
});

app.put("/product/:id", (req, res) => {
    const id =  Number(req.params?.id);
    const { name, brand, price} = req.body;    
    const index = product.findIndex((product) => product.id === id);
    if (!index) product[index] = {name, brand, id, price};
    res.status(200).json(product[index]);
  });

app.delete("/product/:id",(req,res)=>{
  const id = req.params?.id;
  const index = product.findIndex((product) => Number(product.id) === Number(id));
  if(index!=-1){
      const deleted:products = product.splice(index,1)[0];
      res.status(200).json(deleted);
    }
})

app.listen(3000);