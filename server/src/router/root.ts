import express, { Response } from "express";

const router = express.Router();

// server root
router.get("/", (_, res: Response) => {
    res.status(200).send("OK");
});


export default router;