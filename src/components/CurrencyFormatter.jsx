import React from 'react';

function CurrencyFormatter({ value }) {
    // Logic to format value as GBP
    const formattedValue = `£${value.toFixed(2)}`;
    return <span>{formattedValue}</span>;
}

export default CurrencyFormatter;
