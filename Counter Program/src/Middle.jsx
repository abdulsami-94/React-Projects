import { useState } from "react"; 

function Middle() {
    const [count, setCount] = useState(0);

    return (
        <main>
                <div className="main">
                    <p>{count}</p>
                    <button className="decBtn" onClick={() => setCount(count - 1)}>Decrease</button>
                    <button className="resetBtn" onClick={() => setCount(0)}>Reset</button>
                    <button className="incBtn" onClick={() => setCount(count + 1)}>Increase</button>
                </div>    
        </main>
    );
}

export default Middle;
