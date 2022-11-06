import logo from './logo.svg';
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import MyGitHub from "./MyGitHub";
import {Component, useState} from "react";

function App(){
        const [counter, setCounter] = useState(1);
        const increaseCount = () => setCounter(counter + 1);

    // increaseCountBy1 = (count) => {
    //     return count += 1;
    // }
    // increaseCountBy2 = () => {
    //     let Counter1;
    //     Counter1 += 2;
    // }

    // render() {
        return (
            <div className="App">
                <h1>
                    Hello React!
                </h1>
                <h2>
                    Makayla Broyles - v66s848
                </h2>
                <hr/>
                <Counter1 onClick = {increaseCount} />
                <hr/>
                <Counter2/>
                <hr/>
                <MyGitHub/>
                <hr/>
            </div>
        );
    }
//}

export default App;
