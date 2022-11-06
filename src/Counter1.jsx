import React, {useState} from "react";

const Counter1 = (props) => {
    const [count, setCount] = useState(77);

    const increaseCountBy1 = () => {
        setCount(prevCount => prevCount +1);
    }


    return (
        <div>
            <div>{count}</div>
            <button onClick={increaseCountBy1}>+1</button>
        </div>
    )
}
export default Counter1;