export default function NumberButton(props) {
    let textSize = props.size
    return (<button className='rounded-[10px] box-border padding-8 w-16 h-16 bg-[#452a1d] flex items-center justify-center shadow'>
        <div className={`text-${textSize}xl`}>{props.symbol}</div>
    </button >)
};