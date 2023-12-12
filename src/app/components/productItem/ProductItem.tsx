import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../productItem/productItem.module.scss";

interface ProductItemProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className={styles.product_item}>
      <Link href={`/product/${product.id}`}>
        <Image
          src={`/images/${product.images[4]}.png`}
          alt={product.name}
          width={200}
          height={200}
        />

        <h3>{product.name}</h3>
      </Link>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;
