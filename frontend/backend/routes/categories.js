// categories
const express = require('express');
const router = express.Router();

// category add karna
router.post('/', (req, res) => {
    const category = req.body;
    // database mein category ko save karna
    res.json({ message: 'Category saved successfully' });
});

module.exports = router;

