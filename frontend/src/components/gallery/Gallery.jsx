import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:3000/gallery");
      const imageUrls = response.data.map((image, index) => ({
        id: image._id || index,
        url: image.secure_url,
      }));
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {images.map((image) => (
              <div key={image.id} className="w-full max-w-xs mx-auto rounded-lg overflow-hidden">
                <img src={image.url} alt="Gallery" className="w-full h-[235px] object-fit rounded-md shadow-lg" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
