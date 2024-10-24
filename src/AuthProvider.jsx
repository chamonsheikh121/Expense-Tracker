import { info } from "autoprefixer";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [currentDate, setCurrentDate] = useState()



    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // months are 0-indexed, so +1
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    useEffect(() => {
        setCurrentDate(getCurrentDate())
    }, [])

    const info = {
        currentDate: currentDate
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;