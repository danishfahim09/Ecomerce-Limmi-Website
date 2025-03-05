export function generateInitials(name) {

    //split the name into  word
    const words = name.split('')

    //initial variable to store  initials 
    let firstInitial = words[0][0].toUpperCase();
    let secondInitial = '';
    // Loop throug each word to get the initials 
    // for (const word of words) {
    //     //make sure the word is not empty 
    //     if (word.length > 0) {
    //         //add the first letter of each word to the innitial 
    //         firstInitial += word[0].toUpperCase();
    //     } 
    // }
    //get the second innitial from the last word
    if (words.length > 1) {
        secondInitial = words[1][0].toUpperCase();
    }
    //return the generated initials
    return firstInitial + secondInitial
};
