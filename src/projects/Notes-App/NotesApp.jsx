import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function NotesApp() {

    const [notes, setNotes] = useState(() => { const savedNotes = localStorage.getItem('myNotes'); 
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [text, settexts] = useState('');

    const inputRef = useRef(null);

    function handleAddNote() {
        setNotes([...notes, text]);
        settexts('');
        inputRef.current.focus();
    }

    useEffect(() => {localStorage.setItem('myNotes', JSON.stringify(notes));}, [notes]);
    
    return (
        <>
        <div style={{ 
            backgroundColor: theme === 'light' ? '#fff' : '#333', 
            color: theme === 'light' ? '#000' : '#fff',
            minHeight: '100vh',
            padding: '20px' }}>
            <h3>Notes App</h3>
            <input type="text" ref={inputRef} value={text} onChange={(e) => settexts(e.target.value)} />
            <button onClick={handleAddNote}>Add Note</button>
            {notes.map((note, index) => <p key={index}>{note}</p>)}
        </div>
        </>
    );
}

export default NotesApp;