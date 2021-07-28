import { useState } from "react"

export default function Noob({ initialCount }) {
    let [count, setCount] = useState(initialCount)

    function incrementCount() {
        count = count + 1
        console.log(count)
    }

    function decrementCount() {
        count = count - 1
        console.log(count)
    }

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}