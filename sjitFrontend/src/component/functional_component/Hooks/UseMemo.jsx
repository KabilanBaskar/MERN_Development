import { useState, useMemo } from 'react';
function slowfunction(num) {
    for (let i = 0; i <= 10000; i++) { }
    return num * 2;
}
const UseMemo = () => {
    var [number, setnumber] = useState(0);
    var [theme, setTheme] = useState(false);
    var styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
    }
    return (
        <>
            <button onClick={() => { setTheme(!theme) }}>Toggle theme</button>
            <div style={styling}>
                <h1>This is usememo</h1>
                number box : {" "}
                <input type="number" value={number} onChange={(e) => setnumber(e.target.value)} />
                <h2>The number is {number}</h2>
                <h2>the number is {slowfunction(number)}</h2>
            </div>
        </>
    )
}
export default UseMemo;