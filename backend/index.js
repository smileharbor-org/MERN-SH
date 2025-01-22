require("dotenv").config()  // dotenv config
const express = require("express")
const app = express()
const GalleryRoute = require("./routes/galleryRoutes") // import gallery route
const port = 3000
const cors = require("cors")  // cross origin



app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/',GalleryRoute) // route for gallery photos
app.listen(port,()=>console.log(`Server running at ${port}`))