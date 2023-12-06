import React, { createContext, useContext } from 'react';

// Create a new context
export const authContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    // Your authentication logic goes here

    // Example state and functions
    const { user, setUser } = useState(null);
    const login = () => {
        // Login logic
    };
    const logout = () => {
        // Logout logic
    };

    // Provide the state and functions to the children components
    return (
        <authContext.Provider
            value={
                {
                    user, setUser, 
                    login, logout
                }
            }>
            {children}
        </authContext.Provider>
    );
};

// Custom hook to access the context
export default AuthProvider;
