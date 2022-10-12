type Producto = {
    name?: string,
    brand?: string,
    stock?: number,
    unitPrice: number,
}

let productList:Array<Producto> = [
    {
        name: "yougurt",
        brand: "apple",
        stock: 120,
        unitPrice: 250,
    },
    {
        name: "Chocolate",
        brand: "Nike",
        stock: 200,
        unitPrice: 660,
    },
    {
        name: "fernet",
        brand: "Nike",
        stock: 1000,
        unitPrice: 1100,
    },
    {
        name: "coca",
        brand: "Nike",
        stock: 5470,
        unitPrice: 400,
    },
    {
        name: "vodka",
        brand: "Nike",
        stock: 768,
        unitPrice: 750,
    }
]

/*  
    Problema 0:
    Crear un arreglo de producto que tenga stock price name

    Problema 1:
    Crear  un listado de productos y filtrar productos que tengan un valor mayor a 500 pesos.

    Problema 2:
    Renombrar los nombres de los productos y ponerle PREMIUM antes del nombre

    Problema 3:
    Remover el item que sea de marca Apple
    
    Problema 4:
    Crear objecto {items[], total: 0} y agregar los 3 primeros productos a "items" y sumar los precios y setear en total
*/

// 1
const filtered:Array<Producto> = productList.filter((item)=>{
    if(item.unitPrice>500) return true;
})

//console.log(filtered);

// 2
productList.map((item)=>{
    return item.name = "PREMIUM " + item.name;
})

//console.log(productList);
//3
let newList:Producto[] = productList.filter((item => {
    if(item.brand != 'apple') return true;
}));

//console.log(newList);

//4
type Items = {
    items: Array<Producto>,
    total: number,
}
const items:Items = {items: [], total: 0};
items.items = productList.slice(0,3);
//console.log(items);

items.items.forEach((item)=>{
  items.total = items.total + item.unitPrice;
})

console.log(items);

// export type/interface --> Read more.
