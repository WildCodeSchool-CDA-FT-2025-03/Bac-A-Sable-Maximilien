import express from "express";
import repositoryController from "@/controllers/repository.controller";

const router = express.Router();

router.get("/metadata", repositoryController.GetMetadata);

router.get("/", repositoryController.Get);

router.get("/:repoid", repositoryController.GetFromID);

router.delete("/:repoid", repositoryController.Delete);

router.put("/:repoid", repositoryController.Update);

router.post("/", repositoryController.Add);



export default router;
