import Faculty from "./Faculty"
import { createContext } from "react";
export const ResultPublish = createContext()
const CoE = () => {
    return (
        <ResultPublish.Provider value = {{sgpa:"10SGPA", cgpa:"10CGPA"}}>
           <h1>Results published.</h1>
        </ResultPublish.Provider>
    )
}
export default CoE