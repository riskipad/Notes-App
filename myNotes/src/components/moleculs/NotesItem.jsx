import React from 'react';
import NotesItemBody from '../atoms/NotesItemBody';
import DeleteButton from '../atoms/DeleteButton';
import ArchivedButton from '../atoms/ArchivedButton';
 
function NotesItem({ title, body, archived, createdAt, id, onDelete, onArchive}) {
 return (
   <div className="notes-item">
     <NotesItemBody title={title} body={body} createdAt={createdAt}/>
      <div className="notes-item-control">
        <ArchivedButton id={id} archived={archived} onArchive={onArchive} />
        <div className="mid-line"></div>
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
 );
}
 
export default NotesItem;