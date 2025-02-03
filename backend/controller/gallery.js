
const axios = require("axios");
const CLOUD_NAME = process.env.CLOUD_NAME; // Your Cloudinary cloud name
const API_KEY = process.env.API_KEY;       // Your Cloudinary API key
const API_SECRET = process.env.API_SECRET; // Your Cloudinary API secret

const gallery = async (req, res) => {
  try {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;

    const response = await axios.get(url, {
      params: {
        expression: `folder:Gallery`, // Search images in the "Team" folder
        max_results: 30, // Fetch up to 30 images
      },
      auth: {
        username: API_KEY,
        password: API_SECRET,
      },
    });

    console.log("Images:", response.data.resources); // Log images to the console
    res.json(response.data.resources); // Send image list to frontend
  } catch (error) {
    console.error("Error fetching folders from Cloudinary:", error);
    res.status(500).send("Error fetching folders");
  }
};

module.exports = {
  gallery,
};
