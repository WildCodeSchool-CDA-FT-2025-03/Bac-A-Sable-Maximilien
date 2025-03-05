import express, {Request, Response} from 'express'
import "dotenv/config"

const server_port = process.env.SERVER_PORT || 8000;

const server = express();

server.get("/", (_: Request, res: Response) => {
    res.send("hello");
});

server.listen(server_port, () =>  {
    console.info(`Server running on port ${server_port}`);
});