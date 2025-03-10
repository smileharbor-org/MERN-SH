require("dotenv").config()  // dotenv config
const express = require("express")
const app = express()
const GalleryRoute = require("./routes/galleryRoutes") // import gallery route
const port = 3000
const cors = require("cors")  // cross origin
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const allowedOrigins = [
    "http://localhost:5173", 
    "https://smileharborfoundation.org"
]
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}))

app.use('/', GalleryRoute) // route for gallery photos
app.listen(port, () => console.log(`Server running at ${port}`))