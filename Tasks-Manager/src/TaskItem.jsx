function TaskItem({ task, onToggle }) {
    return (
        <li
            onClick={() => onToggle(task.id)}
            style={{ textDecoration: task.done ? "Line-throught" : "none" }}
           >
            {task.text}
            </li>
    );
}

export default TaskItem;