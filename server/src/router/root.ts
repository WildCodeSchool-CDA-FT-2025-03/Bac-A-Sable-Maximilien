import express, { Response } from "express";
import repos from "./repos/repos";

const router = express.Router();

router.use("/repos", repos);

// server root
router.get("/", (_, res: Response) => {
    res.status(200).send("OK");
});



export default router;