import {useState} from "react";

const Counter2 = () => {
    const [count2, setCount] = useState(77);

    const increaseCountBy2 = () => {
        setCount(prevCount => prevCount +2);
    }


    return (
        <div>
            <div>{count2}</div>
            <button onClick={increaseCountBy2}>+2</button>
        </div>
    )
}
export default Counter2;