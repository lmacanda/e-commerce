// ProductReviews.tsx

import React from "react";
import styles from "./productReviews.module.scss"; // Import your styles

interface ProductReviewsProps {
  product: {
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

const ProductReviews: React.FC<ProductReviewsProps> = ({ product }) => {
  if (!product.reviews) {
    return <div>No reviews available</div>;
  }
  return (
    <div className={styles.reviews}>
      {product.reviews.map((review) => (
        <div key={review.id} className={styles.review}>
          <div className={styles.reviewHeader}>
            <img
              src={review.image}
              alt={`${review.name} avatar`}
              className={styles.avatar}
            />
            <div>
              <h4>{review.name}</h4>
              <p>{review.date}</p>
            </div>
          </div>
          <div className={styles.rating}>
            {/* Render the star images based on the review rating */}
            {Array.from({ length: review.rating }).map((_, index) => (
              <img
                key={index}
                src={`/images/star.svg`}
                alt="star"
                className={styles.star}
              />
            ))}
          </div>
          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
