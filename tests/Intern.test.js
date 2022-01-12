const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("seeing if Intern will return an object", () => {
            const intern = new Intern();

            expect(intern).toEqual({});
        })
    })

    describe("name", () => {
        it("seeing if Intern will return a given name", () => {
            const intern = new Intern("Kevin");

            expect("Kevin").toEqual(intern.name);
        })
    })

    describe("id", () => {
        it("seeing if Intern will return a given id", () => {
            const intern = new Intern("Kevin", 3);

            expect(3).toEqual(intern.id);
        })
    })

    describe("email", () => {
        it("seeing if Intern will return a given email", () => {
            const intern = new Intern("Kevin", 3, "intern@email.com");

            expect("intern@email.com").toEqual(intern.email);
        })
    })

    describe("school", () => {
        it("seeing if Intern will return a given school", () => {
            const intern = new Intern("Kevin", 3, "intern@email.com", "boohooU");

            expect("boohooU").toEqual(intern.school);
        })
    })
})