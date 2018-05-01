import React, { Component } from 'react'
import ComponentInput from './CommentInput'
import ComponentList from './ComponentList'
import '../index.css'

class ComponentApp extends Component {

    handleSubmitComment(comment) {
        console.log(comment)
    }

    render() {
        return (
            <div className='wrapper'>
                <ComponentInput
                    onSubmit={this.handleSubmitComment.bind(this)}    
                />
                <ComponentList></ComponentList>
            </div>
        )
    }
}

export default ComponentApp