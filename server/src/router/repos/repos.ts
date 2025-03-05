import express, { Request, Response } from "express";
import StaticContoller from "@/controllers/static/static_data.controllers";
import { validateClientAddRepo } from "@/middlewares/validation.middlewares";
import { reposNotExist } from "@/middlewares/check_repos.middlewares";

const router = express.Router();

// GET Root repos
router.get("/", StaticContoller.getAllRepository);

router.get("/:reposid", StaticContoller.findRepositoryWithID);

router.post("/", validateClientAddRepo, reposNotExist, StaticContoller.addRepository);


export default router;