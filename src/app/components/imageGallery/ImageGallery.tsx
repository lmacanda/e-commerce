import React, { useState, useEffect } from "react";
import styles from "../imageGallery/ImageGallery.module.scss";

interface ImageGalleryProps {
  images?: string[]; // Make images optional
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    images.length > 0 ? images[0] : null
  );

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Images array:", images);
    setIsLoaded(true);
  }, [images]);

  const handleImageClick = (image: string) => {
    console.log("Selected Image:", image);
    setSelectedImage(image);
  };

  if (!isLoaded || !images || images.length === 0) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const displayedThumbnails = images.slice(0, 4);

  return (
    <div className={styles.image_gallery}>
      {/* Thumbnails */}
      <div className={styles.image_gallery_thumbnails_container}>
        {displayedThumbnails.map((image, index) => (
          <div
            key={index}
            className={styles.image_gallery_thumbnails_container_item}
            onClick={() => handleImageClick(image)}
            style={{
              backgroundImage: `url(/images/${image}.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* Main Image */}
      <div className={styles.image_gallery_main_image_container}>
        <div className={styles.image_gallery_main_image_container_item}>
          {selectedImage && (
            <div
              style={{
                backgroundImage: `url(/images/${selectedImage}.png)`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "400px", // Adjust the width for the main image container
                height: "400px", // Adjust the height for the main image container
              }}
            ></div>
          )}
          {!selectedImage && (
            <div className={styles.defaultImage}>
              {/* Set a default image here */}
              <div
                style={{
                  backgroundImage: `url(/images/${images[4]}.png)`, // Use the first image as default
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "423px", // Adjust the width for the default image container
                  height: "500px", // Adjust the height for the default image container
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
