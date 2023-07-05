import express from "express";
import cors from "cors";
import { weatherRoutes } from "./routes/weather-routes";

const app = express();

const corsOptions = {
    origin: "http://localhost:4000",
    credentials: true, // access-control-allow-credentials:true
    optionSuccessStatus: 200
};

const port = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use("/weather", weatherRoutes);

app.listen(port, () => {
    console.log(`Worktables Listening on Port ${port}`);
});

export default app;