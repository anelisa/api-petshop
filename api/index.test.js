const requeste = require("supertest")

const fornecedor = require("../api/index")

describe("GET /teste", () => {
    test("It should respond with an ok", async () => {
        const response = await requeste(fornecedor).get("/teste")
        expect(response.text).toEqual("ok")
    })
})