
const supertest = require('supertest')
import config from './config';
const serverUrl = "euclid.nmu.edu:9200"
const request = supertest(serverUrl)
const path = "/api/birds/0700EE1E5D"

describe("Get Request Suite.", async () => {
	test("Get Birds", async () => {
		let response = await request.get(path)
		/* Test */
		expect(response.status).toEqual(200)
		expect(response.type).toEqual("application/json")
		expect(response.body).toHaveProperty("rfid")
		expect(response.body).toHaveProperty("bandCombo")
		//console.log(response.body)
	});
});
