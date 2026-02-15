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
        if (!text.trim()) return;
        setNotes([...notes, text]);
        settexts('');
        inputRef.current.focus();
    }

    useEffect(() => {localStorage.setItem('myNotes', JSON.stringify(notes));}, [notes]);
    
    return (
        <>
        <div className="max-w-4xl mx-auto p-4">
            <h3 className="p-6">Notes App</h3>
            <div className="flex gap-2 mb-8">
                <input className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 mb-4" type="text" ref={inputRef} value={text} onChange={(e) => settexts(e.target.value)} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors" onClick={handleAddNote}>Add Note</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.map((note, index) => (
                    <p className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 min-h-[100px] break-words" key={index}>{note}</p>
                ))}
            </div>
        </div>
        </>
    );
}

export default NotesApp;