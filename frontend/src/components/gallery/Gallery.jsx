import React, { useState, useEffect } from "react";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../config";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedImages = sessionStorage.getItem("galleryImages");
    if (cachedImages) {
      setImages(JSON.parse(cachedImages));
      setLoading(false);
    } else {
      fetchImages();
    }
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/gallery`, { timeout: 10000 }); // Timeout 10s
      const imageUrls = response.data.map((image, index) => ({
        id: image._id || index,
        url: image.secure_url,
      }));
      setImages(imageUrls);
      sessionStorage.setItem("galleryImages", JSON.stringify(imageUrls)); // Cache images
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

        {/* Skeleton Loader Instead of Spinner */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="w-full h-40 bg-gray-300 animate-pulse rounded-md"></div>
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="mb-4 break-inside-avoid">
                <img
                  src={image.url}
                  alt="Gallery"
                  className="w-full rounded-md shadow-lg"
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add("fade-in")} // Add fade-in effect
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
