const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const fetchuser = require('../middleware/fetchuser');


// Get cart items for the logged-in user
router.get('/view', fetchuser, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get Cart
router.get('/cart', authenticate, async (req, res) => {
  try {
    const userId = req.user.user.id;
    let cart = await Cart.findOne({ user: userId }).populate('items.product');

    if (!cart) return res.status(200).json({ cart: { items: [] } });
    cart.items = cart.items.filter(item => item.product);

    res.status(200).json({ cart });
  } catch (err) {
    console.error('Cart fetch error:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Delete item from cart
router.delete('/cart/:productId', authenticate, async (req, res) => {
  const userId = req.user.user.id;
  const { productId } = req.params;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => {
      return item.product && item.product.toString() !== productId;
    });

    await cart.save();
    const populatedCart = await cart.populate('items.product');
    res.status(200).json({ message: 'Item removed', cart: populatedCart });
  } catch (err) {
    console.error('Delete error:', err.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
});



// Update Quantity or Add to Cart
router.post('/add-to-cart', authenticate, async (req, res) => {
  const userId = req.user.user.id;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
      });
    } else {
      const itemIndex = cart.items.findIndex(item => {
        return item.product && item.product.toString() === productId;
      });

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;

        if (cart.items[itemIndex].quantity <= 0) {
          cart.items.splice(itemIndex, 1);
        }
      } else if (quantity > 0) {
        cart.items.push({ product: productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json({ message: 'Cart updated' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});




module.exports = router;

