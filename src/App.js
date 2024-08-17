import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import ProductCard from './Components/ProductCard';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // Track search term

  useEffect(() => {
    const data = [
      { name: 'Product A', amount: 99.99, version: '1.0', company: 'Company Alpha', category: 'Electronics' },
      { name: 'Product B', amount: 149.99, version: '2.0', company: 'Company Beta', category: 'Books' },
      { name: 'Product C', amount: 199.99, version: '3.0', company: 'Company Gamma', category: 'Electronics' },
      { name: 'Product D', amount: 59.99, version: '1.1', company: 'Company Delta', category: 'Clothing' },
      { name: 'Product E', amount: 89.99, version: '1.2', company: 'Company Epsilon', category: 'Books' },
      { name: 'Product F', amount: 129.99, version: '2.1', company: 'Company Zeta', category: 'Clothing' },
      { name: 'Product G', amount: 179.99, version: '3.1', company: 'Company Eta', category: 'Electronics' },
      { name: 'Product H', amount: 49.99, version: '1.3', company: 'Company Theta', category: 'Books' }
    ];
    
    setProducts(data);
    setCategories([...new Set(data.map(product => product.category))]);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);  // Update search term
    const filtered = products.filter(product => product.category.toLowerCase().includes(term.toLowerCase()));
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <Navbar categories={categories} onSearch={handleSearch} />
      <h1>Top Products</h1>
      {searchTerm && <ProductList products={filteredProducts} />} {/* Show products only if searchTerm is present */}
    </div>
  );
};

export default App;
