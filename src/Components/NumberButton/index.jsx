

export default function NumberButton(props) {
    const buttonChoice = () => { // this is the main function that gets called when a button is clicked. It determines the type of button clicked, and from there it goes into smaller functions that determines what to do
        const symbol = props.symbol; // this gets the symbol of the button, used to determine what button was clicked
        if (symbol === 'AC' || symbol === 'C') {
            isClear(symbol) // if the button was AC or just C
        } else if (symbol === '=') {
            isEquals() // if button was the equals button
        } else {
            const inputSymbol = parseInt(symbol)
            const isNaN = Number.isNaN(inputSymbol) // this checks if it was NaN or a number literal
            lowerTextInput(isNaN, symbol);
        }
    }

    const lowerTextInput = (NanBoolean, symbol) => {
        const bottomText = document.querySelector('#bottomNum');
        const operationSymbol = ['*', '-', '+', '/'];
        if (NanBoolean) { // if the button is not a number and not clear of equal
            if (operationSymbol.includes(symbol)) {
                bottomText.textContent = bottomText.textContent + ' ' + symbol + ' ';
            } else if (symbol === '.') { // this is the part that adds decimal functionality
                bottomText.textContent = bottomText.textContent + symbol;
            } else if (symbol === '+/-') { // inverses the sign of the current equation
                if (bottomText.textContent.charAt(0) === '-') {
                    bottomText.textContent = bottomText.textContent.slice(1)
                } else {
                    bottomText.textContent = '-' + bottomText.textContent
                }
            }
        } else if (!NanBoolean) { // if the button is a number, just output the number
            bottomText.textContent = bottomText.textContent + symbol
        }
    }

    const isClear = (symbol) => { // if the button is clear or all clear, act accordingly
        const bottomText = document.querySelector('#bottomNum');
        const topText = document.querySelector('#topNum');
        if (symbol === 'AC') {
            topText.textContent = '0'
            bottomText.textContent = ''
        } else if (symbol === 'C') {
            bottomText.textContent = bottomText.textContent.slice(0, -1)
        }
    }

    const isEquals = () => { // this is the function that determines what to do when the equals button is clicked
        const bottomText = document.querySelector('#bottomNum');
        const operationSymbol = ['*', '-', '+', '/'];
        const userEquation = bottomText.textContent.split(' ');
        cleanArray(userEquation, '')
        if (operationSymbol.includes(userEquation[0])) {
            continuingEquation(userEquation) // this is if the user wants to continue doing operations on the value of a previous equation
        } else {
            newEquation(userEquation) // this is for if the user wants to do a new operation, outputting its value to the top of the Text
        }
    }

    const doEquation = (operationsArray) => { // this function does the equation work for both continuingEquation and newEquation functions, as they use the same logic
        while (operationsArray.length > 2) {
            let temp;
            if (operationsArray[1] === '+') {
                temp = parseFloat(operationsArray[0]) + parseFloat(operationsArray[2]);
            } else if (operationsArray[1] === '-') {
                temp = parseFloat(operationsArray[0]) - parseFloat(operationsArray[2]);
            } else if (operationsArray[1] === '/') {
                temp = parseFloat(operationsArray[0]) / parseFloat(operationsArray[2]);
            } else if (operationsArray[1] === '*') {
                temp = parseFloat(operationsArray[0]) * parseFloat(operationsArray[2]);
            }
            operationsArray.splice(0, 3);
            operationsArray.unshift(temp);
        }
    }

    const continuingEquation = (operationsArray) => { // this function just gets the operations wanted by the user, and splits it into an array
        const bottomText = document.querySelector('#bottomNum');
        const topText = document.querySelector('#topNum');
        operationsArray.unshift(topText.textContent)
        doEquation(operationsArray);
        bottomText.textContent = ''
        if (operationsArray[0] === Infinity) {
            topText.textContent = `You can't divide by zero! Refresh the Chocolator`
        } else {
            topText.textContent = `${operationsArray[0].toFixed(1)}`
        }
    }

    const newEquation = (operationsArray) => { // similar to the continuingEquation function, but just uses what the user put in on the bottom text field, ignoring the top text field
        const bottomText = document.querySelector('#bottomNum');
        const topText = document.querySelector('#topNum');
        doEquation(operationsArray);
        bottomText.textContent = ''
        if (operationsArray[0] === Infinity) {
            topText.textContent = `You can't divide by zero! Refresh the Chocolator`
        } else {
            topText.textContent = `${operationsArray[0].toFixed(1)}`
        }
    }

    const cleanArray = (array, remove) => { // this clears the array, so that the doEquation function has an array that can be used to perform logic on
        let i = 0;
        while (i < array.length) {
            if (array[i] === remove) {
                array.splice(i, 1);
            } else {
                i++;
            }
        }
    }

    return (<button onClick={buttonChoice} className='text-5xl number border-[8px] border-[#674a44] rounded-[10px] box-border p-10 w-16 h-16 bg-[#452a1d] hover:bg-[#2e1b11] flex items-center justify-center shadow-2xl'>
        {props.symbol}
    </button >);
};