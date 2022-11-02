import React, { useState } from 'react';

export default function NumberButton(props) {
    // const [count, setCount] = useState(0);

    const buttonChoice = () => {
        const symbol = props.symbol;
        if (symbol === 'AC' || symbol === 'C') {
            isClear(symbol)
        } else if (symbol === '=') {
            isEquals()
        } else {
            const inputSymbol = parseInt(symbol)
            const isNaN = Number.isNaN(inputSymbol)
            lowerTextInput(isNaN, symbol);
        }
    }

    const lowerTextInput = (NanBoolean, symbol) => {
        const bottomText = document.querySelector('#bottomNum');
        const operationSymbol = ['*', '-', '+', '/']
        if (NanBoolean) { // if the button is not a number and not clear of equal
            if (operationSymbol.includes(symbol)) {
                bottomText.textContent = bottomText.textContent + ' ' + symbol + ' ';
            } else if (symbol === '.') {
                bottomText.textContent = bottomText.textContent + symbol;
            } else if (symbol === '+/-') {
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

    const isEquals = () => {
        const bottomText = document.querySelector('#bottomNum');
        const topText = document.querySelector('#topNum');
        const operationSymbol = ['*', '-', '+', '/'];
        const userEquation = bottomText.textContent.split(' ');
        cleanArray(userEquation, '')
        if (operationSymbol.includes(userEquation[0])) {
            continuingEquation(userEquation)
        } else {
            newEquation(userEquation)
        }
    }

    const doEquation = (operationsArray) => {
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

    const continuingEquation = (operationsArray) => {
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

    const newEquation = (operationsArray) => {
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

    const cleanArray = (array, remove) => {
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