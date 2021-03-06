import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import '../index.css'
import wrapWithLoadData from './wrapWithLoadData'

class CommentApp extends Component {

    constructor(props: Object) {
        super(props)
        this.state = {
            // comments: []
            comments: props.data
        }
    }

    // componentWillMount() {
    //     this._loadComments()
    // }

    // _loadComments() {
    //     let comments = localStorage.getItem('comments')
    //     if (comments) {
    //         comments = JSON.parse(comments)
    //         this.setState({comments})
    //     }
    // }

    // _saveComments(comments) {
    //     localStorage.setItem('comments', JSON.stringify(comments))
    // }

    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.setState({comments: [...this.state.comments, comment]})
        // this._saveComments([...this.state.comments, comment])
        this.props.saveData([...this.state.comments, comment])
    }

    handleDeleteComment(index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments})
        // this._saveComments({ comments })
        this.props.saveData(comments)
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)}    
                />
                <CommentList 
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        )
    }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')

export default CommentApp