import React from 'react';
import Context from '../Context';

class NoteList extends React.Component {
    static contextType = Context
    
    // Dynamic render functions based on route props

    
    
    
    
    
    determineRouteType() {
        const route = this.props.match.params
        const output = route ? this.renderNoteList() : this.renderNote()
        console.log(route)
        }
    

    

    renderNoteList() {
        console.log('renderNoteList')
    }

    renderNote() {
        console.log('renderNote')
    }

    render() {
    console.log(this.context)
    console.log(this.props)
    const param = this.props.match.params
    console.log(param)

        return (
            <div>Hello</div>
        )
    }
}

export default NoteList;