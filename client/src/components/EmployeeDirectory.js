import React, { useState } from "react";
import { ApolloProvider, useQuery, useMutation } from "@apollo/client";
import client from "../graphql/client";
import { GET_EMPLOYEES } from "../graphql/queries";
import { CREATE_EMPLOYEE } from "../graphql/mutations";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";
import EmployeeCreate from "./EmployeeCreate";

const EmployeeDirectory = () => {
    const { loading, error, data } = useQuery(GET_EMPLOYEES);
    const [employees, setEmployees] = useState([]);
    const [originalEmployees, setOriginalEmployees] = useState([]);
    const [createEmployee] = useMutation(CREATE_EMPLOYEE, {
        onCompleted: (data) => {
            setEmployees((prev) => [...prev, data.createEmployee]);
            setOriginalEmployees((prev) => [...prev, data.createEmployee]);
        },
    });

    // 当数据加载完成时，初始化 employees 和 originalEmployees
    React.useEffect(() => {
        if (data?.employees) {
            setEmployees(data.employees);
            setOriginalEmployees(data.employees);
        }
    }, [data]);

    if (loading) return <p className="text-center mt-3">Loading...</p>;
    if (error) return <p className="text-danger text-center mt-3">Error: {error.message}</p>;

    return (
        <ApolloProvider client={client}>
            <div className="container mt-4" style={{ maxWidth: "800px" }}>
                <EmployeeSearch employees={employees} setEmployees={setEmployees} originalEmployees={originalEmployees} />
                <EmployeeTable employees={employees} />
                <EmployeeCreate createEmployee={createEmployee} />
            </div>
        </ApolloProvider>
    );
};

export default EmployeeDirectory;