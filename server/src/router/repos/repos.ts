import express, { Request, Response } from "express";
import StaticContoller from "../../controllers/static/static_data.controllers";
import { GitHubRepository } from "../../types/github.types";
import staticData from '../../data/static_data.json';

const router = express.Router();

// GET Root repos
router.get("/", StaticContoller.getAllRepository);

router.get("/:reposid", StaticContoller.findRepositoryWithID);



export default router;