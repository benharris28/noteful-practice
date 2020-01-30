import React from 'react';
import Context from '../Context';

class Note extends React.Component {
    static contextType = Context

    render() {
    const { notes } = this.context
    const { name, modified, content } = this.props


        return (
            <div>
            <div>{name}</div>
            <div>{modified}</div>
            
            </div>
        )
    }
}

export default Note;