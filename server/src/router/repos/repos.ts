import express from "express";
// import StaticContoller from "@/controllers/static/static_data.controllers";
import repositoryController from "@/controllers/repository.controller";
// import { checkAddRepoRequest, checkQueryParameter } from "@/middlewares/validation.middlewares";
// import { reposNotExist, getRepositorys } from "@/middlewares/repos.middlewares";
// import { limit } from "@/middlewares/filter.middlewares";

const router = express.Router();

// GET Root repos
router.get("/", repositoryController.GetRepositorys);

router.get("/:repoid", repositoryController.GetRepositoryFromID);

router.delete("/:repoid", repositoryController.Delete);

// router.put("/:repoid", repositoryController.GetRepositorys);

router.post("/", repositoryController.Add);


export default router;