import { createContext, useState } from "react";
import reviews from "../data";


export const AppContext = createContext()

export default function AppContextProvider({ children }) {

    const [data, setData] = useState(reviews[0])
    const [page, setPage] = useState(0)
    const dataLength = reviews.length

    function handelClick(page) {
        setData(reviews[page])
        setPage(page)
    }

    function handelSuprise() {
        let randomNumber = Math.floor(Math.random() * 5)
        if (randomNumber === page) {
            if (page === 4) { randomNumber -= 1 }
            else{
                randomNumber += 1 
            }
        }
        setData(reviews[randomNumber])
        setPage(randomNumber)
    }

    const values = {
        data,
        setData,
        page,
        setPage,
        dataLength,
        handelClick,
        handelSuprise
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}
