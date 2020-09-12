const Intern = require("./lib/Intern");

describe("Intern", () => {

    describe("Initialization", () => {
        it("should create an object with a name, email, and school if provided valid arguments", () => {
            const intern = new Intern("Sarah", "sarah@gmail.com", "University of San Diego");

            
      expect(intern.name).toEqual("Sarah");
      expect(intern.email).toEqual("sarah@gmail.com");
      expect(intern.school).toEqual("University of San Diego");
    });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Intern();

            expect(cb).toThrow();
        });

        it("should throw an error if not provided an email", () => {
            const cb = () => new Intern("Sarah");
            const err = new Error("Expected parameter 'email' to have info");

            expect(cb).toThrowError(err);

        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Intern(3, "email@gmail.com", "USD");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);

        });
    });
});
