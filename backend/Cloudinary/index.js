const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloudinary_url: process.env.CLOUDINARY_URL
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "Deedoo",
        allowedFormats: ['jpg', 'png', 'jpeg']
    }
})

module.exports = {
    cloudinary,
    storage
}