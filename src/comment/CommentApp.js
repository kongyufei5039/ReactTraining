import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import '../index.css'

class CommentApp extends Component {

    constructor(props: Object) {
        super(props)
        this.state = {
            comments: []
        }
    }

    handleSubmitComment(comment) {
        this.setState({comments: [...this.state.comments, comment]})
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)}    
                />
                <CommentList comments={this.state.comments}></CommentList>
            </div>
        )
    }
}

export default CommentApp