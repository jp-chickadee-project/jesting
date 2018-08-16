
const supertest = require('supertest')
const config = require('./testConfig.js')
const request = supertest(config.serverUrl + config.port)

describe("Get Request Suite.", async () => {
	test("Get bird by rfid", async () => {
		const getBirdByRfidPath = "/api/birds/0700EE1E5D"
		let getBirdByRfidResponse = await request.get(getBirdByRfidPath)
		/* Test */
		expect(getBirdByRfidResponse.status).toEqual(200)
		expect(getBirdByRfidResponse.type).toEqual("application/json")
		expect(getBirdByRfidResponse.body).toHaveProperty("rfid")
		expect(getBirdByRfidResponse.body).toHaveProperty("bandCombo")
		//console.log(response.body)
	});
	test("Get all birds", async () => {
		const getAllBirdsPath = "/api/birds"
		let getAllBirdsResponse = await request.get(getAllBirdsPath)
		/* Test */
		expect(getAllBirdsResponse.status).toEqual(200)
		expect(getAllBirdsResponse.type).toEqual("application/json")
	});
});
