import express, {Request, Response} from 'express'
import "dotenv/config"

import root from './router/root'

const server_port = process.env.SERVER_PORT || 8000;

const server = express();

server.use("/", root);

server.listen(server_port, () =>  {
    console.info(`Server running on port ${server_port}`);
});