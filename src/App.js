import React from 'react';
import Context from './Context';
import dummyStore from './dummyStore';
import { Route } from 'react-router-dom'
import NoteList from './NoteList/NoteList';
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
  renderMainRoute() {
    
    return (
    <>
    <Route
      exact
      path='/'
      key='/'
      component={NoteList} />

    <Route
      exact
      path='/folder/:folderId'
      key='/folder/:folderId'
      component={NoteList} />

    <Route
      exact
      path='/note/:noteId'
      key='/note/:noteId'
      component={NoteList} />
    
    </>
    )}

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders
    }
    
    return (
    <Context.Provider value={value}>
      <div className="App">
        {this.renderMainRoute()}
        
      </div>
      </Context.Provider>
    )
  }
}

export default App;
