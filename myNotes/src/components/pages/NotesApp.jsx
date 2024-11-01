import React from 'react';
import NotesInput from '../moleculs/NotesInput';
import NotesActive from '../templates/NotesActive';
import NotesArchive from '../templates/NotesArchive';
import { getInitialData, showFormattedDate} from '../../utils/index';
import '../../style.css'
 
class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
      showArchived: false,
      darkMode: false,
    };
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode(){
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  }
 
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(notes => notes.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: showFormattedDate(new Date())
          }
        ]
      }
    });
  }

  onSearchHandler(event) {
    this.setState({ searchKeyword: event.target.value });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      });
      return { notes };
    });
  }

 
 render() {

      const { darkMode } = this.state;

      const filteredNotes = this.state.notes.filter((note) =>
        note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
      );
      
      const activeNotes = filteredNotes.filter((note) => !note.archived);
      const archivedNotes = filteredNotes.filter((note) => note.archived);

   return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
     <div className="notes-app">
      <button className={`toggle ${darkMode ? 'dark-mode' : ''}`} onClick={this.toggleDarkMode}>
        {darkMode 
          ? <img className="toggle-img" src="public/img/sun-solid-24.png"/> 
          : <img className="toggle-img" src="public/img/moon-solid-24.png"/> 
        }
      </button>
      <h2>My Notes <span>by Riskipad</span></h2>
        <NotesInput addNote={this.onAddNoteHandler}/>
        <NotesActive 
          notes={activeNotes} 
          darkMode={darkMode}
          searchKeyword={this.state.searchKeyword} 
          onDelete={this.onDeleteHandler} 
          onSearch={this.onSearchHandler} 
          onArchive={this.onArchiveHandler}
        />
        <NotesArchive 
          notes={archivedNotes} 
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
     </div>
   );
 }
}
 
export default NotesApp;