const app = require("./app");
const cloudinary = require("cloudinary");
const PORT = process.env.PORT || 3099;

const nftRoute = require("./routes/nftRoute");

// connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.use("/Mouna_Test", nftRoute);


const server = app.listen(PORT, () => {
  console.log(`Server running`);
});

