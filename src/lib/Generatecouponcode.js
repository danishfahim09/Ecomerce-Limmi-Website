import React from 'react'

function Generatecouponcode(tittle='',expiryDate='') {
    const formatedTittle = tittle.toUpperCase().replace(/\s+/g ,'')
    const formatedExpiryDate = expiryDate
    .split('-')
    .reverse()
    .join('');
    const couponCode = `${formatedTittle}-${formatedExpiryDate}`
    return couponCode
}

export default Generatecouponcode 