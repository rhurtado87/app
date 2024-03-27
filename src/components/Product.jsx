import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";
import React from "react";

function Product(props){
    function add(){
        console.log('adding product')
    }

    return(
        <div className="product">
            <img src= {constants.IMAGE_PATH + props.info.image} alt="Product" />
            <h6>{props.info.title}</h6>
            <label className="price">${props.info.price}</label>

        <div className="controls">
            <QuantityPicker />
        <button onClick={add} className="btn btn-sm btn-outline-success add" >
            Add to Cart
            </button>
            </div>
        </div>
    );
}

export default Product;

//QuantityPicker