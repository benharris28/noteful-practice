import React from 'react';
import Context from '../Context';
import Note from '../Note/Note';

class NoteList extends React.Component {
    static contextType = Context
    
    // Dynamic render functions based on route props

    
    
    
    
    
    
    

    

    renderNoteList(notes, folderId, route) {
        // Take the context and map through it
        // Filter for folders if necessary

        console.log('renderNoteList')
        console.log(route)
        const noteList = (route === '/')
        ? notes.map((note, i) => <Note key={i} 
                                        name={note.name}
                                        modified={note.modified}
                                        />)
        : notes.filter(n => n.folderId === folderId).map((note, i) => <Note key={i} 
                                        name={note.name}
                                        modified={note.modified}
                                        content={note.content}/>)
        return (
            noteList
        )


    
    }

    renderNote(notes, noteId) {
        console.log('renderNote')
        const note = notes.find(note => noteId === note.id)
        return ( <Note 
            name={note.name}
            modified={note.modified}
            content={note.content}/>
        )
    }

    render() {
    console.log(this.context)
    console.log(this.props)
    const param = this.props.match.params
    console.log(param)
    const { notes, folders } = this.context;
    const { folderId, noteId } = this.props.match.params || {}
    
    const route = this.props.match.path
    console.log(route)
    const output = (route.includes('folder') || route === '/') ? this.renderNoteList(notes, folderId, route) : this.renderNote(notes, noteId)
    

        return (
            
            <div>{output}</div>
        )
    }
}

export default NoteList;