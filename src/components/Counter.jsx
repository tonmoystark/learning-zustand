import { useCounterStore } from "../store/useCounterStore.js"

const Counter = () => {

    const {counter, increase, decrease, reset} = useCounterStore()
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <div className="flex gap-4">
            <button className="px-4 py-2 border" onClick={() => increase()}>add</button>
            <button className="px-4 py-2 border" onClick={() => counter > 0 ? decrease() : ''}>minus</button>
            <button className="px-4 py-2 border" onClick={() => reset()}>reset</button>
        </div>
    </div>
  )
}

export default Counter