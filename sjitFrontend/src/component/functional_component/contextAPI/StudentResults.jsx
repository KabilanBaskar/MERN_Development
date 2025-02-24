import { useContext } from "react";
import { ResultPublish } from "./CoE";
const val = useContext(ResultPublish)
const StudentResults = (res) => {
    return (
        <>
        <h1>This student results</h1>
        <h2>SGPA : {res.sgpa}</h2>
        <h2>CGPA : {res.cgpa}</h2>
        </>
    )
}
export default StudentResults