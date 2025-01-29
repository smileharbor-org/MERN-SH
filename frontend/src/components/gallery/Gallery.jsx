import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:3000/gallery");
      const imageUrls = response.data.map((image, index) => ({
        id: image._id || index ,
        url: image.secure_url,
      }));
      console.log(imageUrls);
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
        </div>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-10 mx-auto md:px-8 w-full">
          {images.map((image) => (
            <div key={image.id} className=" rounded-lg overflow-hidden w-[300px] ">
              <img src={image.url} alt="Gallery" className="w-full h-[400px] object-fit" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
