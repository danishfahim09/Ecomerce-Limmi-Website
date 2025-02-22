
export function ConvertIsoDateToNormal(isoDate) {
    const dateObject = new Date(isoDate);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); //month are zero-based
    const day = String(dateObject.getDate()).padStart(2, "0") ;
    return `${year}-${month}-${day}`
};
