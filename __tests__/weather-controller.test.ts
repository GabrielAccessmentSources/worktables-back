import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { getWeatherByLocation } from "../controllers/weather-controllers";

jest.mock("axios");

describe("Get weather data by location", () => {
    const mockRequest = {} as Request;
    const mockResponse = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
    } as unknown as Response;

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("Should get weather for london", async () => {
        const mockLocation = "London";
        const mockWeatherData = { location: "London", temperature: 22 };

        // FIX ME
        const mockAxiosResponse: any = {
            data: mockWeatherData,
            status: 200,
            statusText: "OK",
            headers: {},
            config: {}
        };

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
            mockAxiosResponse
        );

        mockRequest.body = { location: mockLocation };

        await getWeatherByLocation(mockRequest, mockResponse);

        expect(mockResponse.json).toHaveBeenCalledWith(mockWeatherData);
        expect(mockResponse.status).not.toHaveBeenCalled();
        expect(mockResponse.send).not.toHaveBeenCalled();
    });

    it("Should fail the call", async() => {
        const mockLocation = "London";

        const mockAxiosError = new Error("API request failed");

        // Mocking axios.get to throw an error
        (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
            mockAxiosError
        );

        mockRequest.body = { location: mockLocation };

        await getWeatherByLocation(mockRequest, mockResponse);

        expect(mockResponse.json).not.toHaveBeenCalled();
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.send).toHaveBeenCalledWith("Worktables - Couldnt find Data");
    });
});