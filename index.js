const express = require("express");
const referralDetailController = require("./controllers/referralDetailController");
const cors = require("cors");

require("./db");

const app = express();

const PORT = process.env.PORT || 8000;

// const corsOptions = {
//     origin: 'http://example.com',
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization'
//   };
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server working" });
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", referralDetailController);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
