import React, { useState } from "react";

const EmployeeCreate = ({ createEmployee }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        dateOfJoining: "",
        title: "Employee",
        department: "IT",
        employeeType: "FullTime",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createEmployee({ variables: { ...formData, age: parseInt(formData.age) } });
    };

    return (
        <form className="mt-4 p-3 border rounded" onSubmit={handleSubmit}>
            <h4 className="mb-3">Create New Employee</h4>
            <div className="mb-3">
                <input name="firstName" className="form-control" placeholder="First Name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <input name="lastName" className="form-control" placeholder="Last Name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <input name="age" type="number" className="form-control" min="20" max="70" placeholder="Age" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <input name="dateOfJoining" type="date" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <select name="title" className="form-select" onChange={handleChange}>
                    <option value="Employee">Employee</option>
                    <option value="Manager">Manager</option>
                    <option value="Director">Director</option>
                    <option value="VP">VP</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="department" className="form-select" onChange={handleChange}>
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="employeeType" className="form-select" onChange={handleChange}>
                    <option value="FullTime">FullTime</option>
                    <option value="PartTime">PartTime</option>
                    <option value="Contract">Contract</option>
                    <option value="Seasonal">Seasonal</option>
                </select>
            </div>
            <button className="btn btn-success" type="submit">Create Employee</button>
        </form>
    );
};

export default EmployeeCreate;