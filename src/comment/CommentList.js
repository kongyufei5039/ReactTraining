import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor(props: Object) {
        super(props)
        this.props = {
            comments: this.props.comments ? this.props.comments : []
        }
    }

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        return(
            <div>
                {this.props.comments.map((item, i) => {
                    return <Comment 
                                comment={item} 
                                key={i}
                                index={i}
                                onDeleteComment={this.handleDeleteComment.bind(this)} />
                })}
            </div>
        )
    }
}

export default CommentList
