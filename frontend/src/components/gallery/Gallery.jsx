import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/gallery');
      const imageUrls = response.data.map(image => image.secure_url);
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <>
      <div className='w-full h-min flex justify-center items-center'>
        <h1 >Gallery</h1>
      </div>
      <div>
        <div
          className="flex flex-wrap gap-4 p-4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {images.map((imageUrl, index) => (
            <div
              key={index}
              style={{
                border: "1px solid grey",
                borderRadius: "10px",
                overflow: "hidden", 
                width: "230px", 
                height: "230px",
              }}
            >
              <picture>
                <source srcSet={imageUrl} type='image/jpg' />
                <img
                  src={imageUrl}
                  alt={` ${index}`}
                  loading='lazy'
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </picture>

            </div>
          ))}
        </div>
      </div>
    </>

  );
}

export default Gallery;
