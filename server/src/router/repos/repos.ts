import express from "express";
import StaticContoller from "@/controllers/static/static_data.controllers";
import { checkAddRepoRequest, checkQueryParameter } from "@/middlewares/validation.middlewares";
import { reposNotExist, getRepositorys } from "@/middlewares/repos.middlewares";
import { limit } from "@/middlewares/filter.middlewares";

const router = express.Router();

// GET Root repos
router.get("/", checkQueryParameter, getRepositorys, limit, StaticContoller.getRepository);

router.get("/:reposid", StaticContoller.findRepositoryWithID);

router.delete("/:reposid", StaticContoller.deleteByID);

router.put("/:reposid", StaticContoller.updateRepository);

router.post("/", checkAddRepoRequest, reposNotExist, StaticContoller.addRepository);


export default router;