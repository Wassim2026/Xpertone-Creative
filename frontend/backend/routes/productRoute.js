const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();


// Image upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);
  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'));
  }
};
const upload = multer({ storage, fileFilter });


//POST /api/products/add
router.post('/products/add', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;


    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product created', product: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating product' });
  }
});

router.post('/upload', upload.single('image'), (req, res) => {
  try {
    const imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;
    res.status(200).json({
      message: 'Image uploaded successfully!',
      imageUrl: imageUrl
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload image' });
  }
});


module.exports = router;
