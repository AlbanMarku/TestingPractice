export function foo(number) {
    return number + 1;
}

export function captialise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}
