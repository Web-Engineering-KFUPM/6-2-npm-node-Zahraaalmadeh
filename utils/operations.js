export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
    return numbers.slice(1).reduce((result, num) => result - num, numbers[0]);
}

export function multiply(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
    if (numbers.slice(1).includes(0)) {
        return "Error: Division by zero";
    }

    return numbers.slice(1).reduce((result, num) => result / num, numbers[0]);
}