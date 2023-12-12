import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../imageGallery/ImageGallery.module.scss";

interface ImageGalleryProps {
  images?: string[]; // Make images optional
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(
    images.length > 0 ? images[0] : ""
  );

  useEffect(() => {
    console.log("Images array:", images);
  }, [images]);

  const handleImageClick = (image: string) => {
    console.log("Selected Image:", image);
    setSelectedImage(image);
  };

  if (!images || images.length === 0) {
    return <div className={styles.noImages}>No images available</div>;
  }

  const displayedThumbnails = images.slice(0, 4);

  return (
    <div className={styles.image_gallery}>
      <div className={styles.image_gallery_thumbnails_container}>
        {displayedThumbnails.map((image, index) => (
          <div
            key={index}
            className={styles.image_gallery_thumbnails_container_item}
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={`/images/${image}.png`} // Adjust the path based on your project structure
              width={100}
              height={100}
              alt={`Thumbnail ${index}`}
            />
          </div>
        ))}
      </div>
      <div className={styles.image_gallery_main_image_container}>
        <div className={styles.image_gallery_main_image_container_item} />
        <Image
          src={`/images/${selectedImage}.png`} // Adjust the path based on your project structure
          width={100}
          height={100}
          alt="Main Product Image"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
