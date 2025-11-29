
import express from 'express';
const app = express();
const PORT = 3000;


export function calculate(firstNum, operator, secondNum) {
    let result;
    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        default:
            throw new Error('Invalid operator');
    }
    return result;
}


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});