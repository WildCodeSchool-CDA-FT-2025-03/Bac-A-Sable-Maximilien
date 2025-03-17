import express from "express";
import githubController from "@/controllers/github.controller";

const githubRouter = express.Router();

githubRouter.get("/:owner", githubController.GetMetadata);

export default githubRouter;
