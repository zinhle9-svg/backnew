const express = require('express');
 const app = express();
const cors = require('cors');
const {Products} = require('./products');
 const port = process.env.PORT || 4000;
   
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('hello world')
})
// get all products
 app.get("/products", (req, res) => {
  res.send(Products);
});
//get each product
    app.get("/api/products/:id", (req, res) => {
      const id= parseInt(req.params.id);
      console.log(`this is an ${id}`)
    const product = Products.find((item) => item.id === id);
   
 // const id = products.id; why not this?
 
   if (!product) {
  return res.status(404).json({ message: "Product not found" });
}
 res.json(product);
});
app.post('/products', (req, res) => {
  const newProduct = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description
  };
  

  res.json(newProduct);
console.log(req.body)
res.json(newProduct)
});




    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
    