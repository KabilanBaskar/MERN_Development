import { useEffect, useState } from "react";
import axios from 'axios';
const UseEffectApi= () => {
    var [posts, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res.data);
            setPost(res.data);
        }) 
        .catch((err) => console.log("Couldn't read API", err));
    }, []);
    return <>
        <h2>This is a Api Example </h2>
        <ol>
            {posts.map((pos) => (
                <li key = {pos.id}>{pos.title}</li>
            ))}
        </ol>
    </>
}
export default UseEffectApi;