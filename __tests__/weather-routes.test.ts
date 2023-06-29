import { Request, Response, NextFunction } from "express";

import { weatherRoutes } from "../routes/weather-routes";

describe("Weather routes", () => {
    it("should test weather route", async () => {
        const location = "London";


        // Mock the request and response objects
        const req = { body: { location } } as Request;
        const res = {} as Response;
        const next = {} as NextFunction;

        // Call the router's middleware with the mocked request, response, and next function
        await weatherRoutes.handle(req, res, next);

        // Assert the response
        expect(res.json).toHaveBeenCalledWith(/* expected weather data */);
        expect(res.status).not.toHaveBeenCalled();
    });
});