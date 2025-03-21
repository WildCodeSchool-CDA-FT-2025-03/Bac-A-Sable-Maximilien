import express, { Response } from "express";
import repos from "./api/repository.router";
import githubRouter from "./api/github.router";

const router = express.Router();

router.use("/api/repos", repos);
router.use("/api/github", githubRouter);

// server root
router.get("/", (_, res: Response) => {
  res.status(200).send("OK");
});

export default router;
