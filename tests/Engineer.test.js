const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("seeing if Engineer will return an object", () => {
            const engineer = new Engineer();

            expect(Engineer).toEqual({});
        }) 
    })

    describe("name", () => {
        it("seeing if Engineer will return a given name", () => {
            const engineer = new Engineer("Matt");

            expect("Matt").toEqual(engineer.name);
        })
    })
})