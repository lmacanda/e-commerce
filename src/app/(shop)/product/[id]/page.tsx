"use client";

import ProductCard from "@/app/components/productCard/ProductCard";
import Products from "@/app/components/products/Products";
import Slide from "@/app/components/slide/Slide";

import React, { useEffect, useState } from "react";

const SingleProductPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const productsFetch = await fetch(
          `https://my-json-server.typicode.com/lmacanda/json/products/${params?.id}`,
          {
            cache: "no-store",
          }
        );
        const Products1 = await productsFetch.json();
        setProduct(Products1);
        setLoading(true);
        console.log("Data for page", Products1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [params.id]);
  console.log("params ", params);

  if (!product) {
    return <div>Loading...</div>; // or some other loading indicator
  }

  return (
    <div>
      <ProductCard product={product as any} />
      <Slide title="Related Products" subtitle="" buttonText={"Veiw More"}>
        <Products numberOfProducts={4} />
      </Slide>
    </div>
  );
};

export default SingleProductPage;
