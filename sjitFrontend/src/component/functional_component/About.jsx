import { useState } from "react";
function About() {
    var stateval = 0;
    var [num, setNum] = useState(stateval);
    function increement() {
        setNum(num+1)
    }
    function decreement() {
        setNum(num-1)
    }
    return (
        <>
        <h2>This is about page</h2>
        <h4>Initial state is {stateval}</h4>
        <button onClick={decreement}>-</button>
        <h4>Updating stateval : {num} </h4>
        <button onClick={() => {setNum(num++)}}>+</button>
        </>
    )
}
export default About;