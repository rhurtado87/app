import React, {useState} from "react";
import "./QuantityPicker.css";

function QuantityPicker(){
    const [quantity, setQuantity] = useState(0);

    function increase() {
        let newVal = quantity + 1;
        setQuantity(newVal);
    }

    function decrease(){
        let newVal = quantity - 1;
        if (newVal > 0) {
            setQuantity(newVal);
        }
    }
    
    return(
        <div className="qt-picker">
            <button className="btn btn-sm btn-primary" disabled={quantity == 1} onClick={decrease}>
                -
            </button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-primary" onClick={increase}>+</button>
        </div>
    );

}

export default QuantityPicker;