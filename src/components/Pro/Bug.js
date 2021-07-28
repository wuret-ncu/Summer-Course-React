
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

function Bug({ initialCount }) {
    const [count, setCount] = useState(initialCount)

    function incrementCount() {
        setCount(count + 1)
        setCount(count + 1)
    }

    function decrementCount() {
        setCount(count - 1)
        setCount(count - 1)
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

Bug.propTypes = {
    initialCount: PropTypes.number
}

export default Bug