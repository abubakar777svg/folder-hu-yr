import express from "express";
const router = express.Router();

router.get("/me", (req, res) => {
  res.json({ success: true, message: "api working fine!" });
});

export default router;
