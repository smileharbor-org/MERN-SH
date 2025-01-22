const {gallery} = require("../controller/gallery")
const express = require("express")
const router = express.Router()

router.get("/gallery",gallery)


module.exports= router