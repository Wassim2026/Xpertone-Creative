import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: null,
  });
  const [products, setProducts] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const token = localStorage.getItem('token');

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/products/all');
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setProduct(p => ({ ...p, image: file }));
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setProduct(p => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('category', product.category);
    if (product.image) formData.append('image', product.image);

    const url = editingId
      ? `http://localhost:5001/api/products/${editingId}`
      : 'http://localhost:5001/api/products/add';
    const method = editingId ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { Authorization: token },
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMessage(editingId ? 'Product updated!' : 'Product added!');
        setErrorMessage('');
        setProduct({ name: '', price: '', description: '', category: '', image: null });
        setPreviewUrl(null);
        setEditingId(null);
        fetchProducts();
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setErrorMessage(data.message || 'Operation failed.');
        setSuccessMessage('');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setErrorMessage('Server error, try again later.');
    }
  };

  const handleEdit = prod => {
    setEditingId(prod._id);
    setProduct({
      name: prod.name,
      price: prod.price,
      description: prod.description,
      category: prod.category,
      image: null,
    });
    setPreviewUrl(prod.imageUrl || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async id => {
    if (!window.confirm('Really delete this product?')) return;
    try {
      const res = await fetch(`http://localhost:5001/api/products/delete/${id}`, {
        method: 'DELETE',
        headers: { Authorization: token },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMessage('Product deleted!');
        setErrorMessage('');
        fetchProducts();
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setErrorMessage(data.message || 'Delete failed');
        setSuccessMessage('');
      }
    } catch (err) {
      console.error('Delete error:', err);
      setErrorMessage('Server error.');
    }
  };

  return (
   
   <div className="container my-4" style={{ backgroundColor: '#081828', color: 'white', padding: '30px', borderRadius: '12px' }}>

  <form onSubmit={handleSubmit} className="p-4 rounded shadow mb-5" style={{ backgroundColor: '#0f2233' }}>

    <h3 className="mb-4 text-center text-primary">
      {editingId ? 'Edit Product' : 'Add New Product'}
    </h3>

    {successMessage && (
      <div className="alert alert-success text-center fw-bold">
        {successMessage}
      </div>
    )}
    {errorMessage && (
      <div className="alert alert-danger text-center fw-bold">
        {errorMessage}
      </div>
    )}

    <input
      type="text"
      name="name"
      value={product.name}
      onChange={handleChange}
      className="form-control mb-3"
      placeholder="Product Name"
      required
    />
    <input
      type="text"
      name="price"
      value={product.price}
      onChange={handleChange}
      className="form-control mb-3"
      placeholder="Price"
      required
    />
    <textarea
      name="description"
      value={product.description}
      onChange={handleChange}
      className="form-control mb-3"
      placeholder="Description"
      rows="3"
      required
    />
    <input
      type="text"
      name="category"
      value={product.category}
      onChange={handleChange}
      className="form-control mb-3"
      placeholder="Category"
      required
    />
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={handleChange}
      className="form-control mb-3"
    />

    {previewUrl && (
      <div className="mb-3 text-center">
        <img
          src={previewUrl}
          alt="Preview"
          style={{ maxWidth: '150px', borderRadius: '8px' }}
        />
      </div>
    )}

    <div className="text-center">
      <button
        type="submit"
        className="btn btn-primary px-4"
      >
        {editingId ? 'Update Product' : 'Add Product'}
      </button>
    </div>
  </form>

  <h4 className="mb-4 text-center text-warning fw-bolder" >All Products</h4>
  <div className="row">
  {products.map(prod => (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={prod._id}>
      <div
        className="card h-100 shadow-sm border-0 rounded-4"
        style={{ backgroundColor: '#212121', border: '4px solid #000' }}
      >
        {prod.imageUrl && (
          <img
            src={`http://localhost:5001${prod.imageUrl}`}
            alt={prod.name}
            className="card-img-top rounded-top-4"
            style={{ height: '160px', objectFit: 'cover' }}
          />
        )}
        <div className="card-body p-3">
          <h6 className="fw-bold text-warning mb-2">{prod.name}</h6>
          <p className="text-light small mb-1">
            {prod.description.length > 50
              ? prod.description.slice(0, 50) + '...'
              : prod.description}
          </p>
          <p className="mb-1 text-warning fw-semibold">
            Rs. {prod.price}
          </p>
          <p className="text-light small">{prod.category}</p>
        </div>
        <div className="card-footer bg-dark border-0 d-flex justify-content-between px-3 pb-3">
          <button
            onClick={() => handleEdit(prod)}
            className="btn btn-sm btn-outline-warning text-light d-flex align-items-center"
          >
            <FaEdit className="me-1" /> Edit
          </button>
          <button
            onClick={() => handleDelete(prod._id)}
            className="btn btn-sm btn-outline-danger d-flex align-items-center"
          >
            <FaTrash className="me-1" /> Delete
          </button>
        </div>
      </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default AddProduct;
