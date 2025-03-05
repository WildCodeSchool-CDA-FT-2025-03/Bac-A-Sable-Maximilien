import express, { Response } from "express";

import staticData from "../../data/static_data.json";

const router = express.Router();

// GET Root repos
router.get("/", (_, res: Response) => {
    res.status(200).send(staticData);
});


export default router;