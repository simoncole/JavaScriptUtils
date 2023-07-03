export const ignoreCaseIndexOf = (arr, lookup) => arr.findIndex(item => 
lookup.toLowerCase() === item.toLowerCase());
export const capitalize = (str) => {
    return str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : 
str;
}% 
