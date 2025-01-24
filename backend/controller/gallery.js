const axios = require("axios")
const CLOUD_NAME = process.env.CLOUD_NAME
const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET

const gallery = async(req,res) => {
    try {
        const response = await axios.get(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`, {
         
          headers: {
            Authorization: `Basic ${Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64')}`,
          },
        });
    
        console.log(response)
        res.json(response.data.resources); // Send images back to frontend
      } catch (error) {
        console.error("Error fetching images from Cloudinary:", error);
        res.status(500).send("Error fetching images");
      }
    }    


module.exports = {
    gallery
}