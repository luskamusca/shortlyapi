import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 4000;
server.listen(4000, () => console.log(`Server running in port: 4000`));