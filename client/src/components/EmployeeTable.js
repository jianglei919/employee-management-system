import React from "react";

const EmployeeTable = ({ employees }) => {
    return (
        <table className="table table-striped table-hover mt-4">
            <thead className="table-primary">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Title</th>
                    <th>Department</th>
                    <th>Employee Type</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.age}</td>
                        <td>{emp.title}</td>
                        <td>{emp.department}</td>
                        <td>{emp.employeeType}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;