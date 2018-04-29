import React, { Component } from 'react'
import ComponentInput from './CommentInput'
import ComponentList from './ComponentList'
import '../index.css'

class ComponentApp extends Component {
    render() {
        return (
            <div className='wrapper'>
                <ComponentInput></ComponentInput>
                <ComponentList></ComponentList>
            </div>
        )
    }
}

export default ComponentApp