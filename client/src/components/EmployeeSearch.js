import React, { useState } from "react";

const EmployeeSearch = ({ employees, setEmployees, originalEmployees }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (!query) {
            setEmployees(originalEmployees); // 如果查询为空，则恢复原始数据
            return;
        }

        const filteredEmployees = originalEmployees.filter((emp) =>
            emp.firstName.toLowerCase().includes(query.toLowerCase()) ||
            emp.lastName.toLowerCase().includes(query.toLowerCase()) ||
            emp.department.toLowerCase().includes(query.toLowerCase()) ||
            emp.title.toLowerCase().includes(query.toLowerCase())
        );

        setEmployees(filteredEmployees);
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search by Name, Department, Title..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default EmployeeSearch;