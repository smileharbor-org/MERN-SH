import React, { useState, useEffect } from "react";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../config";
import { Helmet } from "react-helmet-async"; // react-helmet
import { LazyLoadImage } from "react-lazy-load-image-component";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextCursor, setNextCursor] = useState(null); // For pagination
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (cursor = null) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/gallery`, {
        params: { next_cursor: cursor },
      });

      setImages((prev) => [...prev, ...response.data.images]);
      setNextCursor(response.data.next_cursor);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  //loading only few chunks of images from cludinary
  const loadMoreImages = () => {
    if (nextCursor) {
      setLoadingMore(true);
      fetchImages(nextCursor);
    }
  };

  return (
    <>
      <Helmet >
        <title>Gallery | SmileHarbor</title>
        <link rel="canonical" href="https://smileharborfoundation/gallery" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="w-full h-40 bg-gray-300 animate-pulse rounded-md"></div>
              ))}
            </div>
          ) : (
            <>
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="mb-4 break-inside-avoid">
                    <LazyLoadImage
                      src={image.secure_url}
                      alt="Gallery"
                      effect="blur"
                      className="w-full rounded-md shadow-lg transition-opacity duration-500 opacity-0"
                      onLoad={(e) => e.target.classList.remove("opacity-0")}
                    />
                  </div>
                ))}
              </div>

              {nextCursor && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={loadMoreImages}
                    className={`px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition ${loadingMore ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    disabled={loadingMore}
                  >
                    {loadingMore ? "Please Wait. Loading..." : "Load More"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>

  );
}

export default Gallery;
