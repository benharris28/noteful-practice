import React from 'react';
import Context from './Context';
import dummyStore from './dummyStore';
import './App.css';


class App extends React.Component {
  // Add state
  // Add routes
  // Conditionally render the routes
  // Set up values for provider component
  // Wrap app in provider component
  state = {
    notes: dummyStore.notes,
    folders: dummyStore.folders
  }

  handleAddNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  handleDeleteNote = (note) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== note)
    })
  }

  handleAddFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  // Routes
  
  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default App;
