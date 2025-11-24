const express = require('express');
 const app = express();
const cors = require('cors');
const products = require('./products');
   
app.use(cors());
app.use(express.json());

    // Get all products
    app.get("/products", (req, res) => {
  res.json(products);
});
//get each product
    app.get("/api/products/:id", (req, res) => {
    const product = products.find((item) => item.id === id);
 // const id = products.id; why not this?
  const id= parseInt(req.params.id);
   if (!product) {
  return res.status(404).json({ message: "Product not found" });
}
 res.json(product);
});


    const port = process.env.PORT || 4000;
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
    