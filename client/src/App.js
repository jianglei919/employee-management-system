import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import EmployeeDirectory from "./components/EmployeeDirectory";

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1 className="text-2xl font-bold text-center my-4">Employee Management System</h1>
                <EmployeeDirectory />
            </div>
        </ApolloProvider>
    );
}

export default App;
