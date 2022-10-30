import NumberButton from "../NumberButton";

export default function NumberGrid(props) {
    return (
        <div className='grid md:grid-cols-7 md:grid-rows-3 grid-cols-3 grid-rows-[7] gap-8'>
            <NumberButton symbol='7' />
            <NumberButton symbol='8' />
            <NumberButton symbol='9' />
            <NumberButton symbol='0' />
            <NumberButton symbol='*' />
            <NumberButton symbol='' />
            <NumberButton symbol='' />
            <NumberButton symbol='4' />
            <NumberButton symbol='5' />
            <NumberButton symbol='6' />
            <NumberButton symbol='.' />
            <NumberButton symbol='-' />
            <NumberButton symbol='AC' />
            <NumberButton symbol='C' />
            <NumberButton symbol='1' />
            <NumberButton symbol='2' />
            <NumberButton symbol='3' />
            <NumberButton symbol='=' />
            <NumberButton symbol='+' />
            <NumberButton symbol='/' />
            <NumberButton symbol='+/-' />
        </div>
    )
}