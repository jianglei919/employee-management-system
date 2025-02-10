const Employee = require("../models/Employee");

const resolvers = {
  Query: {
    employees: async () => {
      return await Employee.find();
    },
  },
  Mutation: {
    createEmployee: async (_, { firstName, lastName, age, dateOfJoining, title, department, employeeType }) => {
      const newEmployee = new Employee({
        firstName,
        lastName,
        age,
        dateOfJoining,
        title,
        department,
        employeeType,
        currentStatus: true, // 默认值为 true
      });

      await newEmployee.save();
      return newEmployee;
    },
  },
};

module.exports = resolvers;