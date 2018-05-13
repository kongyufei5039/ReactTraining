import React, { Component } from 'react'

class Comment extends Component {

    constructor(props: Object) {
        super(props)
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration < 60 
                ? `${Math.round(Math.max(duration, 1))} 秒钟前`
                : duration < 3600 
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(duration / 3600)} 小时前`
        })
    }

    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span 
                    onClick={this.handleDeleteComment.bind(this)}
                    className='comment-delete'>
                    删除
                </span>
            </div>
        )
    }
}

export default Comment