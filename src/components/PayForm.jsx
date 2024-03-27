import React from 'react';
import './PayForm.css';

function PayForm() {
    return (
        <div className="pay-page">
            <h2>Payment</h2>
            <div className="payment-form">
                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" />

                <label htmlFor="expiryDate">Expiry Date:</label>
                <input type="text" id="expiryDate" name="expiryDate" />

                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" />

                <button type="submit">Pay Now</button>
            </div>
        </div>
    );
}

export default PayForm;
