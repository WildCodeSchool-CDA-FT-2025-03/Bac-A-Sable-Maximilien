import express from 'express'

const server = express();

server.get("/", (req, res) => {
    res.send("hello");
});

server.listen(8080, () =>  {
    console.info("Server running on port 8080");
});