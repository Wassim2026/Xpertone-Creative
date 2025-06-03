const connectToMongo = require('./db');
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const fs = require('fs');
const path = require('path');

// Connect to MongoDB
connectToMongo();

const app = express();
const port = 5001;
const cors = require('cors');

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Middleware setup
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/user', require('./routes/user'));
app.use('/uploads', express.static('uploads'));  // Serve static files from 'uploads' directory
app.use('/api/products', productRoutes);
app.use('/uploads', express.static('uploads'));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
