export const ignoreCaseIndexOf = (arr, lookup) => arr.findIndex(item => 
lookup.toLowerCase() === item.toLowerCase());
export const capitalize = (str) => {
    return str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : 
str;
}
export const numberFormatter = (rawNumber) => {

    var dec = String(rawNumber).split(/[.,]/),
        sep = ',',
        decsep = '.';

    return dec[0].split('').reverse().reduce(function (prev, now, i) {
        return i % 3 === 0 ? prev + sep + now : prev + now;
    }).split('').reverse().join('') + (dec[1] ? decsep + dec[1] : '');
}
export const snakeToTitleCase = (str) => {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + 
word.slice(1)).join('');
}
export const snakeToSentenceCase(key: string) {
    let result = key.replace(/_/g, ' ');
    result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    return result;
}% 
