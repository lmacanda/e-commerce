"use client";
import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
}

export default function Products({
  numberOfProducts,
}: {
  numberOfProducts: number;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const staticData = await fetch(
          "https://my-json-server.typicode.com/lmacanda/json/products",
          {
            cache: "force-cache",
          }
        );

        if (!staticData.ok) {
          throw new Error(`Network response was not ok: ${staticData.status}`);
        }

        const data: Product[] = await staticData.json();

        console.log(data);
        const slicedData = data.slice(0, numberOfProducts);
        setProducts(slicedData);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [numberOfProducts]);

  return (
    <div className={styles.container}>
      {products.map((product: Product) => (
        <div key={product.id}>
          <div className={styles.product__wrapper}>
            <Link href={`/product/${product.id}`} passHref key={product.id}>
              <div className={styles.product__image}>
                <Image
                  src={`/images/${product.images[4]}.png`}
                  alt={product.name}
                  width={200}
                  height={180}
                />
              </div>
            </Link>
            <div className={styles.product__text}>
              <Link href={`/product/${product.id}`} passHref key={product.id}>
                <div className={styles.product__name}>{product.name}</div>
              </Link>
              <div className={styles.product__price}>
                <span>$</span>
                {product.price}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
