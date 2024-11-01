import React from 'react';
import NotesItem from '../moleculs/NotesItem';
 
function NotesList({ notes, onDelete, onArchive }) {
 return (
   <div className="notes-list">
    {notes.length > 0 ? (
      notes.map((note) => (
          <NotesItem 
           key={note.id} 
           onDelete={onDelete}
           onArchive={onArchive}
           {...note} />
        ))
    ) : (
      <p className="alert-text">No notes yet</p>
    )
    }
     
   </div>
 );
}
 
export default NotesList;