const mongoose = require("mongoose");

// const MONGO_URI = "mongodb://localhost/your-database-name";
const MONGO_URI =
  "mongodb+srv://kartikeysharma17:M5iXfVPHYaBiMdVO@cluster0.dxvojgz.mongodb.net/";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
