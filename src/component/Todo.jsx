import React, { useState } from 'react'

const Todo = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleNote = () => {
    if (!note.trim()) return;

    if (editIndex !== null) {
      // Update
      const updated = [...notes];
      updated[editIndex] = note;
      setNotes(updated);
      setEditIndex(null);
    } else {
      // Add
      setNotes([...notes, note]);
    }

    setNote("");
  };

  const handleDelete = (index) => {
    const filtered = notes.filter((_, i) => i !== index);
    setNotes(filtered);
  };

  const handleEdit = (index) => {
    setNote(notes[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <input
        type='text'
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder='Enter your Todos'
      />

      <button onClick={handleNote}>
        {editIndex !== null ? "Update" : "Add Note"}
      </button>

      <ul>
        {notes.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;