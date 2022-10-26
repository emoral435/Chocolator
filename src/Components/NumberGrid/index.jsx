import NumberButton from "../NumberButton";

export default function NumberGrid(props) {
    return (
        <div className='grid grid-cols-7 grid-rows-3 gap-8'>
            <NumberButton size='5' symbol='7' />
            <NumberButton size='5' symbol='8' />
            <NumberButton size='5' symbol='9' />
            <NumberButton size='5' symbol='0' />
            <NumberButton size='5' symbol='X' />
            <NumberButton size='3' symbol='ON' />
            <NumberButton size='9' symbol='OFF' />
            <NumberButton size='5' symbol='4' />
            <NumberButton size='5' symbol='5' />
            <NumberButton size='5' symbol='6' />
            <NumberButton size='5' symbol='.' />
            <NumberButton size='5' symbol='-' />
            <NumberButton size='3' symbol='AC' />
            <NumberButton size='3' symbol='C' />
            <NumberButton size='5' symbol='1' />
            <NumberButton size='5' symbol='2' />
            <NumberButton size='5' symbol='3' />
            <NumberButton size='5' symbol='=' />
            <NumberButton size='5' symbol='+' />
            <NumberButton size='5' symbol='/' />
            <NumberButton size='5' symbol='+/-' />
        </div>
    )
}