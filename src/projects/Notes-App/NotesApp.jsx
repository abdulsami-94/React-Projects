import { useState } from 'react';
import { useEffect } from 'react';

function NotesApp() {

    const [notes, setNotes] = useState([]);
    const [text, settexts] = useState('');

    function handleAddNote() {
        setNotes([...notes, text]);
        settexts('');
    }

    useEffect(() => {localStorage.setItem('myNotes', JSON.stringify(notes));}, [notes]);
    
    return (
        <>
        <h3>Notes App</h3>
        <input type="text" value={text} onChange={(e) => settexts(e.target.value)} />
        <button onClick={handleAddNote}>Add Note</button>
        {notes.map((note, index) => <p key={index}>{note}</p>)}
        </>
    );
}

export default NotesApp;