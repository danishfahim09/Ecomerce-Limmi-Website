import React from 'react'

function Generatecouponcode(tittle, expiryDate) {

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