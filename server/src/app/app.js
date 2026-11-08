import express from "express";
import Authroutes from '../routes/auth.routes.js';
const app = express();

app.use(express.json());

app.use("/api/auth",Authroutes);

export default app;