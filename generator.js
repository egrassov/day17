// mongoimport --db fakeusers --collection users --jsonArray --file dataModel.json
const faker = require("faker");
const fs = require("fs");
const nPeopleToGenerate = 500

const dataModel = Array(nPeopleToGenerate)
    .fill(0)
    .map(x => ({
        name: faker.name.findName(),
        street: faker.address.streetAddress(),
        city: faker.address.city()
    }))

fs.writeFile("./dataModel.json", JSON.stringify(dataModel), function (err) {
    console.log("file has been written");
})