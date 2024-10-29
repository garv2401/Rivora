const router = require('express').Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");  // Specify the directory where images will be stored
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;  // Unique filename
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });
// POST route for image upload
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({ msg: "No image" });  // Make sure to return here to avoid continuing execution
        }

        // Construct public URL and image URL path
        const publicUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        const imageUrl = path.join(__dirname, "../public/uploads", req.file.filename);  // Ensure the path is correct

        // Send the URLs as JSON response (only once)
        return res.json({
            publicUrl,
            imageUrl,
        });

    } catch (err) {
        return res.status(500).json({ msg: err.message });  // If error occurs, send a response and stop execution
    }
});

module.exports = router;
