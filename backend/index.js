import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import router from "./routes/routes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1", router);
if (process.env.NODE_ENV === "development") {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export default app;
