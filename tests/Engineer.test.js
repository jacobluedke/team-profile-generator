const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("seeing if Engineer will return an object", () => {
            const engineer = new Engineer();

            expect(engineer).toEqual({});
        }) 
    })

    describe("name", () => {
        it("seeing if Engineer will return a given name", () => {
            const engineer = new Engineer("Matt");

            expect("Matt").toEqual(engineer.name);
        })
    })

    describe("id", () => {
        it("seeing if Engineer will return a given id", () => {
            const engineer = new Engineer("Matt", 2);

            expect(2).toEqual(engineer.id);
        })
    })

    describe("email", () => {
        it("seeing if Engineer will return a given email", () => {
            const engineer = new Engineer("Matt", 2, "engineer@email.com");

            expect("engineer@email.com").toEqual(engineer.email);
        })
    })

    describe("github", () => {
        it("seeing if Engineer will return a given github username", () => {
            const engineer = new Engineer("Matt", 2, "engineer@email.com", "doormatt");

            expect("doormatt").toEqual(engineer.github)
        })
    })
})