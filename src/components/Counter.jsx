import { useCounterStore } from "../store/useCounterStore.js"

const Counter = () => {

    const {counter, increase, decrease, reset} = useCounterStore()
  return (
    <div className="border my-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl my-4">Counter : {counter}</h1>
        <div className="flex my-2 gap-4">
            <button className="px-4 py-2 border" onClick={() => increase()}>add</button>
            <button className="px-4 py-2 border" onClick={() => counter > 0 ? decrease() : ''}>minus</button>
            <button className="px-4 py-2 border" onClick={() => reset()}>reset</button>
        </div>
    </div>
  )
}

export default Counter