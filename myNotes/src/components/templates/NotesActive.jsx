import React from 'react';
import NotesList from '../organisms/NotesList';
import SearchBar from '../atoms/SearchBar';

function NotesActive({ notes, darkMode, onDelete, searchKeyword, onSearch, onArchive}) {
 return (
   <div className="notes-active">
    <div className="separator">
      <h3 className="notes-active-title">Active Notes</h3>
      <SearchBar 
        darkMode={darkMode} 
        searchKeyword={searchKeyword} 
        onSearch={onSearch} 
      />
    </div>
    <NotesList 
      notes={notes} 
      onDelete={onDelete} 
      onArchive={onArchive} 
    />
   </div>
 );
}
  
export default NotesActive;