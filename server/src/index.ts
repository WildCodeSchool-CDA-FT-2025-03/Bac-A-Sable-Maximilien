import express from "express";
import "dotenv/config";
import "module-alias/register";

import root from "./router/root";
import logger from "@/services/logger";
const server_port = process.env.SERVER_PORT || 8000;

const server = express();

server.use(express.json());

server.use("/", root);

server.listen(server_port, () => {
  logger.info(`Server running on port ${server_port}`);
});
