import React, {useState} from "react";
import "./QuantityPicker.css";

const IncrDecrementBtn = ({minValue = 0, maxValue = 100}) =>{
    const [count, setCount] = useState(minValue);

    //Funtion to use the incrementing on counter
const handleIncrementCounter = () =>{
    if (count < maxValue) {
        setCount((prevState) => prevState + 1);
    }
};
    //funtion to handleDecrementCounter
const handleDecrementCounter = () => {
    if (count > minValue) {
        setCount((prevState) => prevState -  1);
    }
};

return(
    <div className="btn-group">
        <button className="increment-btn" onClick={handleIncrementCounter}>
        <span className="material-symbols-outlined">add</span>
        </button>

    <p>{count}</p>

        <button className="decrement-btn" onClick={handleDecrementCounter}>
            <span className="material-symbols-outlined">remove</span>
        </button>
    </div>
);
};

export default IncrDecrementBtn; 