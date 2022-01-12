const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("seeing if Manager will return an object", () => {
            const manager = new Manager();

            expect(manager).toEqual({});
        })
    })
    
    describe("name", () => {
        it("seeing if Manager will return a given name", () => {
            const manager = new Manager("John");
            
            expect("John").toEqual(manager.name);
        })
    })

    describe("id", () => {
        it("seeing if Manager will return a given id", () => {
            const manager = new Manager("John", 1);

            expect(1).toEqual(manager.id);
        })
    })

    describe("email", () => {
        it("seeing if Manager will return a given email", () => {
            const manager = new Manager("John", 1, "manager@email.com");

            expect("manager@email.com").toEqual(manager.email);
        })
    })

    describe("officeNumber", () => {
        it("seeing if Manager will return a given officeNumber", () => {
            const manager = new Manager("John", 1, "manager@email.com", 1);

            expect(1).toEqual(manager.officeNumber);
        })
    })
})