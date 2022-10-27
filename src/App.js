import NumberGrid from "./Components/NumberGrid"
import ChocolatorDiv from "./Components/ChocolatorBigDiv"
import GreenOutput from "./Components/GreenOutput"
import Credits from "./Components/Credits"

export default function App() {
  return (
    <div className="flex flex-col items-center mt-16">  
      <div className="bg-[#3b2317] p-12 rounded-[40px] shadow-2xl border border-black">
        <div className='flex gap-8 pb-16'>
          <GreenOutput />
          <ChocolatorDiv />
        </div>
        <div>
          <NumberGrid />
        </div>
      </div>
      <div className='mt-12'>
        <Credits />
      </div>
    </div>
  )
}