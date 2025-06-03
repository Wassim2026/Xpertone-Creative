const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const authenticate = require('../middleware/authenticate');
const multer = require('multer');
const path = require('path');

// Set up multer to save uploaded images to the 'uploads' folder
const upload = multer({
  dest: 'uploads/',  // Destination folder for uploaded files
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max file size
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      return cb(new Error('Only .jpg, .jpeg, .png files are allowed.'));
    }
    cb(null, true);
  },
});

// Endpoint to add a product with image
router.post('/add', upload.single('image'), async (req, res) => {
  const { name, price, description, category } = req.body;

  // Validate that the required fields are present
  if (!name || !price || !description || !category || !req.file) {
    return res.status(400).json({ success: false, message: 'All fields are required including an image' });
  }

  // Generate the image URL
  const imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;

  // Create the product
  const newProduct = new Product({
    name,
    price,
    description,
    category,
    imageUrl,
  });

  try {
    await newProduct.save();  // Save product to DB
    res.json({ success: true, message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ success: false, message: 'Error saving product' });
  }
});

module.exports = router;
