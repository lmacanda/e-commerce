import React from "react";
import styles from "./productDescription.module.scss"; // Make sure to import your styles
import Image from "next/image";

interface ProductDescriptionProps {
  product: {
    id: string;
    name: string;
    description: string;
    images: string[];
  };
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <div className={styles.productDescription}>
      <p className={styles.productDescriptionText}>{product.description}</p>
      <div className={styles.productImages}>
        {product.images &&
          product.images.map((image, index) => (
            <div key={index} className={styles.productImage}>
              <Image
                src={`/images/${image}.png`}
                width={200}
                height={200}
                alt={`Product Image ${index + 1}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDescription;
