import NumberGrid from "./Components/NumberGrid"
import ChocolatorDiv from "./Components/ChocolatorBigDiv"
import GreenOutput from "./Components/GreenOutput"

export default function App() {
  return (
    <div className="flex items-center justify-center">  
      <div className="bg-[#3b2317]">
        <NumberGrid />
      </div>
      <div>
        <ChocolatorDiv />
      </div>
      <div>
        <GreenOutput />
      </div>
    </div>
  )
}