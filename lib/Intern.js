function Intern(name, email, school) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
  
    if (typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    if (typeof school !== "string" || !school.trim().length) {
        throw new Error("Expected parameter 'email' to be a non-empty string");
      }
  
    this.name = name;
    this.email = email;
    this.school = school
  }
  
  module.exports = Intern;