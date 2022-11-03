import img from './1051377.png';
import React, { useEffect } from 'react';

export default function Credits() {
    useEffect(() => { // this handles the keyboard presses that happen within the page
        function handeKeyDown(e) {
            const bottomText = document.querySelector("#bottomNum")
            const operationSymbol = ['*', '-', '+', '/'];
            if ((e.key >= 0 && e.key <= 9) || (e.key === '.')) {
                bottomText.textContent = bottomText.textContent + e.key
            } else if (operationSymbol.includes(e.key)) {
                bottomText.textContent = bottomText.textContent + " " + e.key + " "
            } else if (e.key === "Enter" || e.key === '=') {
                isEquals()
            } else if (e.key === "Backspace" || e.key === 'c' || e.key === 'C') {
                bottomText.textContent = bottomText.textContent.slice(0, -1)
            }
        }
        document.addEventListener('keydown', handeKeyDown);

        return function cleanup() {
            document.removeEventListener('keydown', handeKeyDown);
        }
    }, [])
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

    return (<div className='flex gap-12'>
        <div className='flex items-center'>
            <div className='text-lg text-left'>
                made by emoral435
            </div>
        </div>
        <a href='https://github.com/emoral435' rel='noreferrer' target='_blank'>
            <img src={img} alt='github logo' className='w-12 h-12 transition ease-in-out duration-700 hover:rotate-[360deg]' />
        </a>
    </div>
    );
};