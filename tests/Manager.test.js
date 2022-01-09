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
})