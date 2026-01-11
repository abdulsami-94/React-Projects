import { useState } from "react";

function Body() {
    const [count, setCount] = useState(0);

    return(
        <main>
            <h2>{count}</h2>
            <button className="incBtn" onClick={() => setCount(count + 1)}>Increase</button>
            <button className="resetBtn" onClick={() => setCount(0)}>Reset</button>
            <button className="decBtn" onClick={() => setCount(count - 1)}>Decrease</button>
        </main>
    );
}

export default Body;