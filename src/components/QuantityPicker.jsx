import React, {useState} from "react";
import "./QuantityPicker.css";

const IncrDecrementBtn = ({minValue = 0, maxValue = 10}) =>{
    const [count, setCount] = useState(minValue);

    //Funtion to use the incrementing on counter
const incrementCounter = () =>{
    if (count < maxValue) {
        setCount((prevState) => prevState + 1);
    }
};
    //funtion to handleDecrementCounter
const decrementCounter = () => {
    if (count > minValue) {
        setCount((prevState) => prevState -  1);
    }
};

return(
    <div className="btn-group">
        <button className="increment-btn" onClick={incrementCounter}>
        <span className="material-symbols-outlined">add</span>
        </button>

    <p>{count}</p>

        <button className="decrement-btn" onClick={decrementCounter}>
            <span className="material-symbols-outlined">remove</span>
        </button>
    </div>
);
};

export default IncrDecrementBtn; 