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

app.use(cors({
    origin:"https://smileharborfoundation.org",
    credentials:true
}))

app.use('/',GalleryRoute) // route for gallery photos
app.listen(port,()=>console.log(`Server running at ${port}`))