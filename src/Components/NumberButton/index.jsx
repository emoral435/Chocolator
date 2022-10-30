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
        const operationSymbol = ['*', '-', '+', '/'];
        if (bottomText.textContent.charaAt(0)) {

        }
    }

    return (<button onClick={buttonChoice} className='text-5xl number border-[8px] border-[#674a44] rounded-[10px] box-border p-10 w-16 h-16 bg-[#452a1d] hover:bg-[#2e1b11] flex items-center justify-center shadow-2xl'>
        {props.symbol}
    </button >);
};