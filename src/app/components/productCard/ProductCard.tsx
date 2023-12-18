import styles from "../productCard/productCard.module.scss";
import Image from "next/image";
import ImageGallery from "../imageGallery/ImageGallery";

import ColorButtons from "../colorButtons/ColorButtons";
import SizeButtons from "../sizeButtons/SizeButtons";
import { useState } from "react";
import QuantityButton from "../quantityButton/QuantityButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

import ProductTabs from "../productTabs/ProductTabs";
import ProductDescription from "../productDescription/ProductDescription";
import ProductAdditonalInfo from "../productAdditionalInfo/ProductAdditionalInfo";
import ProductReviews from "../productReviews/ProductReviews";
import BreadcrumbPage from "../breadcrumbPage/BreadcrumbPage";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    description: string;
    sizes?: string[];
    colors?: string[];
    SKU: string;
    category: string;
    tags?: string[];
    reviews: {
      id: number;
      name: string;
      comment: string;
      rating: number;
      image: string;
      date: string;
    }[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1); // Initialize with default quantity

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    console.log("Color: ", color);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      // Add other relevant product information here if needed
    };
    dispatch(addToCart(cartItem));
  };

  const tabs = [
    { name: "Description", content: <ProductDescription product={product} /> },
    {
      name: "Additional Information",
      content: <ProductAdditonalInfo product={product} />,
    },
    {
      name: `Reviews ${product.reviews ? `[${product.reviews.length}]` : ""}`,
      content: <ProductReviews product={product} />,
    },
  ];

  if (!product) {
    return <div>Loading...</div>; // or some other loading indicator
  }
  return (
    <>
      <BreadcrumbPage productName={product.name} />
      <div className={styles.product}>
        <ImageGallery images={product.images} />
        <div className={styles.product_description}>
          <h1 className={styles.product_description_name}>{product.name}</h1>
          <h3 className={styles.product_description_price}>
            Rs.{product.price}
          </h3>
          <div className={styles.product_description_rating}>
            <Image src={`/images/star.svg`} width={20} height={20} alt="star" />
            <Image src={`/images/star.svg`} width={20} height={20} alt="star" />
            <Image src={`/images/star.svg`} width={20} height={20} alt="star" />
            <Image src={`/images/star.svg`} width={20} height={20} alt="star" />

            <span className={styles.product_description_rating_review}>
              {" "}
              | 5 Customer Reviews
            </span>
          </div>
          <p className={styles.product_description_text}>
            {product.description}
          </p>

          <p className={styles.product_description_size}>
            Size: {selectedSize}
          </p>

          <SizeButtons
            sizes={product.sizes || []}
            selectedSize={selectedSize}
            onClick={handleSizeClick}
          />

          <p className={styles.product_description_color}>
            Color: {selectedColor}
          </p>

          <ColorButtons
            colors={product.colors || []}
            selectedColor={selectedColor}
            onClick={handleColorClick}
          />

          <div className={styles.product_add_btn}>
            <QuantityButton
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <button
              className={styles.product_add_btn_cart}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          <ul className={styles.product_info}>
            <li>SKU: sku</li>
            <li>Category: {product.category}</li>
            <li>Tags: {product.tags}</li>
            <div className={styles.product_social}>
              <li className={styles.product_social_item}>
                <div className={styles.product_social_item_text}>Share:</div>
                <div className={styles.product_social_item_icons}>
                  <Image
                    src={`/images/social/facebook.svg`}
                    width={20}
                    height={20}
                    alt="facebook"
                  />
                  <Image
                    src={`/images/social/linkedin.svg`}
                    width={20}
                    height={20}
                    alt="instagram"
                  />
                  <Image
                    src={`/images/social/twitter.svg`}
                    width={20}
                    height={20}
                    alt="linkedin"
                  />
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <ProductTabs tabs={tabs} />
    </>
  );
};

export default ProductCard;
