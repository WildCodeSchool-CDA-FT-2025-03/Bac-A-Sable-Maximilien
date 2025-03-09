import express, { Response } from "express";
import repos from "./repository/repository.router";

const router = express.Router();

router.use("/repos", repos);

// server root
router.get("/", (_, res: Response) => {
  res.status(200).send("OK");
});

export default router;
