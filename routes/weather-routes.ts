import { Router, json } from "express";

import { getWeatherByLocation } from "../controllers/weather-controllers";

const router = Router();

router.use(json());

router.post("/", getWeatherByLocation);

export const weatherRoutes = router;