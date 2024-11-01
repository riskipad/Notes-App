import React from 'react';
 
class NotesInput extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        title: '',
        body: '',
      }
    
      this.maxTitleLength = 50;
      this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
      this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onTitleChangeEventHandler(event) {
      this.setState(() => {
        const { value } = event.target;
        if (value.length <= this.maxTitleLength) {
          this.setState({
            title: value,
          });
        }
      });
    }
    
    onBodyChangeEventHandler(event) {
      this.setState(() => {
        return {
          body: event.target.value,
        }
      });
    }
    
    onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNote(this.state);
    }

render() {

  const remainingCharacters = this.maxTitleLength - this.state.title.length;

 return (
   <>
    
    <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
        <h3>Create Note</h3>
        <p>Remaining Characther: {remainingCharacters}</p>
        <input type="text" placeholder='Tittle' value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
        <textarea placeholder='Write your idea in here' value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
        <button type="submit">Create</button>
    </form>
   </>
 );
}

}
 
export default NotesInput;