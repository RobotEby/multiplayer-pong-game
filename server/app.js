import path from "node:path";
import express from "express";
import routes from "./api/routes.js";

const root = path.join(import.meta.dirname, "..");
const app = express();

app.use(express.json());
app.use(express.static(path.join(root, "public")));
app.use("/shared", express.static(path.join(root, "shared")));
app.use("/api", routes);

export default app;
