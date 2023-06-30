import request from "supertest";

import app from "../index";

describe("Weather routes", () => {
    it("should test weather route", async () => {
        const location = "London";

        const response = await request(app)
            .post("/weather")
            .send({ location });

        expect(response.status).toBe(200);
    });
});