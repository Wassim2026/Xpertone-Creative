const express = require('express');
const router = express.Router();

//http://localhost:5000/api/admin/products:

router.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 9.99 },
        { id: 3, name: 'Product 3', price: 12.99 }
    ];
    res.json(products);
});
//Product added
router.post('/products', (req, res) => {
    const product = req.body;
    console.log(product);
    res.json({ message: 'Product added successfully' });
});

//categories
router.get('/categories', (req, res) => {
    const categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' }
    ];
    res.json(categories);
});
//Category added
router.post('/categories', (req, res) => {
    const category = req.body;
    console.log(category);
    res.json({ message: 'Category added successfully' });
});
module.exports = router;