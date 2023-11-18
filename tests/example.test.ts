import request from "supertest";
import app from "../src/app";
import { Server } from "http";

describe("Example Test Suite", () => {
    // let server: Server;

    // // Start the server before the tests run
    // beforeAll((done) => {
    //     server = app.listen(3000, done);
    // });

    // // Close the server after the tests run
    // afterAll((done) => {
    //     server.close(done);
    // });

    it("GET /get - success", async () => {
        const result = await request(app).get("/get");
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({ message: "Hello World!" });
    });
});
