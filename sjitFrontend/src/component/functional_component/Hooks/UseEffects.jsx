import { useEffect, useState } from "react";
const UseEffect = () => {
    var [text, setText] = useState("");
    useEffect
    return (
        <section>
            <h1>This is use Effect Example</h1>
            Type your text : <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
            <h2>The typed text is : {text}</h2>
        </section>
    )
}
export default UseEffect;