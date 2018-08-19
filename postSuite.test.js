const supertest = require('supertest')
const config = require('./testConfig.js')
const request = supertest(config.serverUrl + config.port)

describe("Post Request Suite", aysnc () => {
    test("Create a visit", aysnc () => {
        
    });
});