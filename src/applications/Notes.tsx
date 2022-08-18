import { useState, useEffect } from 'react'

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
    <div style={{ overflow: "hidden", height: "100%", display: "flex" }}>
      <div style={{ width: "5cm", borderRight: "1px solid gray", textAlign: "center" }}>
        <h2 onClick={addNote}>Add new note</h2>
        {notes.map((note) =>
          <>
            <h4 style={{ display: "inline" }} key={note.id} onClick={() => setSelected(note)}>{note.title}</h4>
            <button className="closeWindow" style={{ float: "right" }} onClick={() => removeNote(note.id)}>×</button>
            <br />
            <br />
          </>
        )}
      </div>
      <div style={{ width: "100%", padding: "0.5em" }}>
        <h1>{selected != null ? selected.title : null}</h1>
        <textarea style={{ height: "100%", width: "100%", color: "var(--primary-color)" }} key={selected?.id} value={selected?.content} onChange={e => updateText(e.target.value, selected?.id)} ></textarea>
      </div>
    </div>
  )
}

export default Notes;