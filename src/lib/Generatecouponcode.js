import React from 'react'

function Generatecouponcode(tittle, expiryDate) {
    const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(expiryDate); // Checks for YYYY-MM-DD format

    // Handle invalid expiryDate
    if (!isValidDate) {
        expiryDate = '1970-01-01'; // Default to a placeholder date
    }

    // Format the title
    const formatedTittle = tittle.toUpperCase().replace(/\s+/g, '');

    // Format the expiry date
    const formatedExpiryDate = expiryDate
        .split('-') // Split into parts
        .reverse()  // Reverse the order
        .join('');  // Join back as a single string

    // Generate the coupon code
    const couponCode = `${formatedTittle}-${formatedExpiryDate}`;
    return couponCode;
}

export default Generatecouponcode