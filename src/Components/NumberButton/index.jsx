export default function NumberButton(props) {
    return (<button className=' border-[8px] border-[#674a44] rounded-[10px] box-border p-10 w-16 h-16 bg-[#452a1d] flex items-center justify-center shadow-2xl'>
        <div className={`text-5xl`}>{props.symbol}</div>
    </button >)
};