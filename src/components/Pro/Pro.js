
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

function Pro({ initialCount }) {
    const [count, setCount] = useState(initialCount)

    function incrementCount() {
        setCount(currCount => currCount + 1)
        setCount(currCount => currCount + 1)
    }

    function decrementCount() {
        setCount(currCount => currCount - 1)
        setCount(currCount => currCount - 1)
    }

    useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            {count}
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

Pro.propTypes = {
    initialCount: PropTypes.number
}

export default Pro