import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
        <h3 className="text-3xl font-bold text-blue-600 underline">Counter App</h3>
        <p>Count: {count} </p>
        <button onClick={() => setCount(count+1)}> Increase </button>
        <button onClick={() => setCount(0)}> Reset </button>
        <button className="border p-1 m-1 bg-color-red-400 text-color-green-600 " onClick={() => setCount(count-1)}> Decrease </button>
        </>
    );
}

export default Counter;