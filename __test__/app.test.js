const users = require("../controllers/usersController");
const app = require("../app");
const supertest = require("supertest");
const mongoose = require("mongoose");

describe("appTest", () => {
  beforeAll(async () => {
    await mongoose.disconnect();
    await mongoose.connect(process.env.DBURL);
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });
  describe("GET /test", () => {
    it("should return Hello World!", async () => {
      const response = await supertest(app).get("/users/test");

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Hello World!");
      expect(response.header["content-type"]).toBe(
        "application/json; charset=utf-8"
      );
    });
  });

  describe("GET /user", () => {
    describe("GET: when the request is valid", () => {
      it("get all users", async () => {
        const response = await supertest(app).get("/users/getusers");

        expect(response.status).toBe(200);
        // expect(response.body[0]).toEqual({ id: 1, username: 'admin', password: 'admin' });
        expect(response.body[0]).toMatchObject({
          //   id: expect.anything(), - Returns from the database: Object("62351508a4ba18eeb861074c") and the type is not defined, therefore, here is a temporary comment
          username: expect.any(String),
          password: expect.any(String),
        });
        expect(response.header["content-type"]).toBe(
          "application/json; charset=utf-8"
        );
      });
    });

    describe("GET: when the request is not valid", () => {});
  });
});
