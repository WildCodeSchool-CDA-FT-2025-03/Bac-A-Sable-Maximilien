import express from "express";
import repositoryController from "@/controllers/repository.controller";

const router = express.Router();

// GET Root repos
router.get("/", repositoryController.Get);

router.get("/:repoid", repositoryController.GetFromID);

router.delete("/:repoid", repositoryController.Delete);

router.put("/:repoid", repositoryController.Update);

router.post("/", repositoryController.Add);

export default router;
