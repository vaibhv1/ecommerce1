import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/api";
import SearchFilter from "./SearchFilter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setFilteredProducts(products);
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    };
    getProducts();
  }, []);

  const handleSearch = (term) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (sortKey) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (sortKey === "name") {
        return a.title.localeCompare(b.title);
      }
      if (sortKey === "price-asc") {
        return a.price - b.price;
      }
      if (sortKey === "price-desc") {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredProducts(sorted);
  };

  const handleFilter = (category) => {
    const filtered =
      category === ""
        ? products
        : products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <SearchFilter
        categories={categories}
        onSearch={handleSearch}
        onSort={handleSort}
        onFilter={handleFilter}
      />
      <div className="product-list-container">
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
