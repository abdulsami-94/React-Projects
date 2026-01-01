import { useState } from "react"; 

function Middle() {
    const [count, setCount] = useState(0);

    return (
        <main>
                <div className="main">
                    <h2>{count}</h2>
                    <button onClick={() => setCount(count - 1)}>Decrease</button>
                    <button onClick={() => setCount(0)}>Reset</button>
                    <button onClick={() => setCount(count + 1)}>Increase</button>
                </div>    
        </main>
    );
}

export default Middle;
