const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const authenticate = require('../middleware/authenticate');
const multer = require('multer');
const path = require('path');

// Set up multer for image uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      return cb(new Error('Only image files are allowed.'));
    }
    cb(null, true);
  }
});

// ✅ Add product
router.post('/add', authenticate, upload.single('image'), async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !price || !description || !category || !imageUrl) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const product = new Product({ name, price, description, category, imageUrl });
    await product.save();

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error('Add error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ✅ Get all products
router.get('/all', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    console.error('Fetch all error:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching products' });
  }
});

// ✅ Get single product details
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, product });
  } catch (error) {
    console.error('Fetch single error:', error.message);
    res.status(400).json({ success: false, message: 'Error fetching product details' });
  }
});

// ✅ Update product
router.put('/:id', authenticate, upload.single('image'), async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updateData = { name, price, description, category };
    if (imageUrl) updateData.imageUrl = imageUrl;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, product: updatedProduct });
  } catch (error) {
    console.error('Update error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ✅ Delete product
router.delete('/delete/:id', authenticate, async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
