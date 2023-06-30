import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

import { uri } from "../helpers/uri";
import { WeatherResponseType } from "../helpers/types";

export const getWeatherByLocation = async(req: Request, res: Response) => {
    const { location } = req.body;
    try {
        const url = `${uri}/current.json?key=533dda67764d4135ad4172805232906&q=${location}&aqi=no`;

        const response: AxiosResponse<WeatherResponseType> = await axios.get(url);
        const weatherData: WeatherResponseType = response.data;

        res.json(weatherData);
    } catch (error) {
        res.status(404).send("Worktables - Couldnt find Data");
    }
};
