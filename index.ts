import express from "express";
import { weatherRoutes } from "./routes/weather-routes";

const app = express();

const port = process.env.PORT || 5000;

app.use("/weather", weatherRoutes);

app.listen(port, () => {
    console.log(`Worktables Listening on Port ${port}`);
});
