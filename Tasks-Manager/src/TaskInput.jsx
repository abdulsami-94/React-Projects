import { useState} from "react";

function TaskInput({ onAdd}) {
    const [text, setText] = useState("");

    return (
        <div>
            <input
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <button
        onClick={() => {
            onAdd(text);
            setText("");
        }}
        >
            Add
        </button>
        </div>
    );
}

export default TaskInput;