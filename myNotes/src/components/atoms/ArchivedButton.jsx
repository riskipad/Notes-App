import React from 'react';
 
function ArchivedButton({ id, onArchive, archived }) {
 return (
   <>
     <button className="notes-item-archive" onClick={() => onArchive(id)}> 
     {archived ? 'Unarchive' : 'Archive'}
     </button>
   </>
 );
}
 
export default ArchivedButton;