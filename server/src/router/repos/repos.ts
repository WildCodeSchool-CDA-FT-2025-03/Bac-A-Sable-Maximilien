import express, { Request, Response } from "express";
import StaticContoller from "../../controllers/static/static_data.controllers";

const router = express.Router();

// GET Root repos
router.get("/", StaticContoller.getAllRepository);

router.get("/:reposid", StaticContoller.findRepositoryWithID);



export default router;