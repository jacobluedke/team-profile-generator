const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("seeing if Employee will return an object", () => {
            const employee = new Employee();

            expect(employee).toEqual({});
        })
    })

    describe("name", () => {
        it("seeing if Employee will return the given name", () => {
            const employee = new Employee("Faran");

            expect("Faran").toEqual(employee.name);
        })
    })

    describe("id", () => {
        it("seeing if Employee will return the given id", () => {
            const employee = new Employee("Faran", 0);

            expect(0).toEqual(employee.id);
        })
    })

    describe("email", () => {
        it("seeing if Employee will return a given email", () => {
            const employee = new Employee("John", 1, "employee@email.com");

            expect("employee@email.com").toEqual(employee.email);
        })
    })

})