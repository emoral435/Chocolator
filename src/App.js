import NumberButton from "./Components/NumberButton"

export default function App() {
  return (
    <div className='container mx-auto bg-gray-200 roundex-xl shadow'>
      <p className='text-3xl text-gray-700 font-bold mb-5'>
        Welcome!
      </p>
      <p className='text-gray-500 text-lg'>
        React and Tailwind CSS in action
      </p>
      <NumberButton symbol='7' />
    </div>
  )
}