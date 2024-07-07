const express = require("express");
const router = express.Router();
const RefferalDetail = require("../models/RefferalDetail");

// Get all referral details
router.get("/refferal-details", async (req, res) => {
  try {
    const refferalDetails = await RefferalDetail.find();
    res.json(refferalDetails);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single referral detail by ID
router.get("/refferal-detail/:id", async (req, res) => {
  try {
    const refferalDetails = await RefferalDetail.findById(req.params.id);
    if (!refferalDetails) {
      return res.status(404).json({ error: "Referral Detail not found" });
    }
    res.json(refferalDetails);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add a new referral detail
router.post("/refferal-detail", async (req, res) => {
  try {
    console.log(req.body);

    const { refferal_name, refferal_email, reffree_name, reffree_email } =
      req.body;
    console.log(refferal_name);
    const newRefferalDetail = new RefferalDetail({
      refferal_name,
      refferal_email,
      reffree_name,
      reffree_email,
    });
    console.log("newRefferalDetail", newRefferalDetail);
    const savedRefferalDetail = await newRefferalDetail.save();
    res.status(201).json(savedRefferalDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
