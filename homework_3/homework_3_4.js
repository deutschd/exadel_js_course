function removeSpecialCharacters(str) {
    let lower = str.toLowerCase();
    let upper = str.toUpperCase();

    let res = "";
    for(i=0; i<lower.length; ++i) {
        if(lower[i] != upper[i] || lower[i].trim() === '')
            res += str[i];
    }
    return res;
}
console.log(removeSpecialCharacters('HE!!LL??OO'))