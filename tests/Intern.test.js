const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("seeing if Intern will return an object", () => {
            const intern = new Intern();

            expect(Intern).toEqual({});
        })
    })

    describe("name", () => {
        it("seeing if Intern will return a given name", () => {
            const intern = new Intern("Kevin");

            expect("Kevin").toEqual(intern.name);
        })
    })
})