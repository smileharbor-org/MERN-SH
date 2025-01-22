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
    <div>
      <h1>Cloudinary Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((imageUrl, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img
              src={imageUrl}
              alt={`cloudinary-image-${index}`}
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Gallery;
