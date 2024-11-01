import React from 'react';
 
function NotesItemBody({ title, body, createdAt}) {
 return (
   <>
     <h3 className="notes-item-title">{title}</h3>
     <p className="notes-item-date">{createdAt}</p>
     <p className="notes-item-body">{body}</p>
   </>
 );
}
 
export default NotesItemBody;