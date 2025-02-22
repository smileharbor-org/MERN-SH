const axios = require("axios");
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

const gallery = async (req, res) => {
  try {
    const { next_cursor } = req.query; // Get next_cursor for pagination
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;

    const params = {
      expression: `folder:Gallery`,
      max_results: 10, // Load 10 images per request
      next_cursor, // For pagination
    };

    const response = await axios.get(url, {
      params,
      auth: {
        username: API_KEY,
        password: API_SECRET,
      },
    });

    // Optimize image URLs by adding Cloudinary transformations
    const optimizedImages = response.data.resources.map((image) => ({
      id: image.public_id,
      secure_url: `${image.secure_url.replace('/upload/', '/upload/q_auto:low,q_auto:eco,f_auto,w_600/')}`, // Auto quality, format, and resize to 600px
    }));

    res.status(200).json({
      images: optimizedImages,
      next_cursor: response.data.next_cursor, // Send next_cursor for frontend to fetch more images
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to load images" });
  }
};

module.exports = { gallery };
