import React from 'react';
import NotesList from '../organisms/NotesList';

function NotesArchive({ notes, onDelete, onArchive}) {
 return (
   <div className="notes-archive">
    <h3 className="notes-archive-title">Archive Notes</h3>
    <NotesList 
      notes={notes} 
      onDelete={onDelete} 
      onArchive={onArchive} 
    />
   </div>
 );
}
  
export default NotesArchive;