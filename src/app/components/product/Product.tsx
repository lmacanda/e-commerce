"use client";
import React, { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import ProductCard from "../../components/productCard/ProductCard";
import FilterBar from "../../components/filterBar/FilterBar";
import styles from "./Product.module.scss";
interface Product {
  id: string;
  name: string;
  price: number;
  images: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayType, setDisplayType] = useState<"list" | "grid">("list");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;

  useEffect(() => {
    // Fetch data from your API here
    // Example using fetch:
    fetch("https://my-json-server.typicode.com/lmacanda/json/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <FilterBar displayType={displayType} setDisplayType={setDisplayType} />
      <div className={styles.shop}>
        {currentProducts.map((product) =>
          displayType === "list" ? (
            <ProductItem key={product.id} product={product} />
          ) : (
            <ProductCard key={product.id} product={product} />
          )
        )}
      </div>
      <div className={styles.shop_pagination}>
        {/* Pagination buttons */}
        {Array.from({
          length: Math.ceil(products.length / productsPerPage),
        }).map((_, index) => (
          <button
            className={styles.shop_pagination_btn}
            key={index + 1}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;

// className={styles.shop_pagination}
//className={styles.shop_pagination_btn=
