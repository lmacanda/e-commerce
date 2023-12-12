// ProductAdditionalInformation.tsx

import React from "react";
import styles from "../productAdditionalInfo/productAdditionalInfo.module.scss";

interface ProductAdditionalInformationProps {
  product: {
    size?: string[];
    colors?: string[];
    SKU: string;
  };
}

const ProductAdditionalInformation: React.FC<
  ProductAdditionalInformationProps
> = ({ product }) => {
  return (
    <div className={styles.additionalInformation}>
      <ul>
        {product.size && <li>Size: {product.size.join(", ")}</li>}
        {product.colors && <li>Colors: {product.colors.join(", ")}</li>}
        <li>SKU: {product.SKU}</li>
      </ul>
    </div>
  );
};

export default ProductAdditionalInformation;
