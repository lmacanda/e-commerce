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
    <div className={styles.product_description}>
      <p className={styles.product_description_text}>
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road.
        <br />
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with
        a well-balanced audio which boasts a clear midrange and extended highs
        for a sound that is both articulate and pronounced. The analogue knobs
        allow you to fine tune the controls to your personal preferences while
        the guitar-influenced leather strap enables easy and stylish travel.
      </p>
      <div className={styles.product_description_images}>
        <Image
          src={`/images/sofa1.png`}
          alt="sofa"
          width={300}
          height={300}
          className={styles.product_description_images_item}
        />
        <Image
          src={`/images/sofa2.png`}
          alt="sofa"
          width={300}
          height={300}
          className={styles.product_description_images_item}
        />
      </div>
    </div>
  );
};

export default ProductDescription;
