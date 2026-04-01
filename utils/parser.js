import _ from "lodash";

export function parseNumbers(input) {
    return _.filter(_.map(input, (str) => Number(str)), (num) => !_.isNaN(num));
}

export function isValidOperation(operation) {
    const validOps = ["add", "subtract", "multiply", "divide"];
    return _.includes(validOps, operation);
}