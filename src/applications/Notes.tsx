import { useState, useEffect } from 'react'
import styled from 'styled-components';

const NoteList = styled.div`
  width: 5cm;
  border-right: 1px solid gray;
  text-align: center;
  user-select: none;
`

const NoteEntry = styled.div`
  display: flex;
  justify-content: center;
  transition: transform 0.2s;

  :hover {
      transform: scale(1.1);
  }

  > h4, button {
    margin: 0;
    cursor: pointer;
  }
`

const SelectedNote = styled.div`
  width: 100%;
  padding: 0.5em;

  > textarea {
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    height: 80%;
    width: 100%;
    color: var(--primary-color);
  }
`

export const Notes = () => {

  interface NoteTypes {
    id: number;
    title: string;
    content: string;
  }

  const [notes, setNotes] = useState<NoteTypes[]>([]);
  const [selected, setSelected] = useState<NoteTypes>();
  const [highestId, setHighestId] = useState(0);

  const addNote = () => {
    const newNote = {
      id: highestId + 1,
      title: "Note " + new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      content: "",
    };
    setNotes([
      ...notes,
      newNote
    ]);
    setSelected(newNote);
    setHighestId(highestId + 1);
    sessionStorage.setItem("notesHighestId", JSON.stringify(highestId));
  }

  const updateText = (text: string, id: number | undefined) => {
    if (id !== undefined) {
      const index = notes.findIndex((note => note.id === id));
      const updatedNote = { ...notes[index], content: text };
      setNotes(notes => notes.map((note) => note.id === id ? updatedNote : note))
      setSelected(updatedNote);
      sessionStorage.setItem("notes", JSON.stringify(notes));
    }
  }

  const removeNote = (id: number) => {
    const filtered = notes.filter((c) => c.id !== id);
    setNotes(filtered);
    sessionStorage.setItem("notes", JSON.stringify(filtered));
  }

  useEffect(() => {
    const storedNotes = sessionStorage.getItem("notes");
    const storedHighestId = sessionStorage.getItem("notesHighestId");
    if (storedNotes !== null) {
      setNotes(JSON.parse(storedNotes));
      setSelected(JSON.parse(storedNotes)[0]);
    } else {
      setNotes([{ id: -1, title: "Hello world", content: "Hello world" }]);
      setSelected({ id: -1, title: "Hello world", content: "Hello world" });
    }

    if (storedHighestId !== null) {
      setHighestId(JSON.parse(storedHighestId) + 1);
    }
  }, []);

  // TODO: Make notes save across sessions? Also solve issues arising from having two note windows up at the same time?

  return (
    <div style={{ height: "100%", display: "flex" }}>
      <NoteList>
        <h2 onClick={addNote}>Add new note</h2>
        {notes.map((note) =>
          <NoteEntry key={note.id}>
            <h4 onClick={() => setSelected(note)}>{note.title}</h4>
            <button onClick={() => removeNote(note.id)}>×</button>
          </NoteEntry>
        )}
      </NoteList>
      <SelectedNote >
        {selected && <h1>{selected.title}</h1>}
        <textarea value={selected?.content} onChange={e => updateText(e.target.value, selected?.id)} />
      </SelectedNote>
    </div>
  )
}

export default Notes;