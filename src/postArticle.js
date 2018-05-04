import React, { Component } from 'react';
import './App.css';

class postArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {}
    submitArticle() {
        //post a article
        let editInput = this.refs.editInput.value
        let body = {
            title: editInput
        }
        let that = this;
        const $ = window.$;
        $(function() {
            $.ajax({
                type: "POST",
                url: "http://localhost:4000/list/add",
                data: body,
                success: function(data) {
                    if (data.code === 200) {
                        console.log(data.msg)
                        //initial input value
                        that.refs.editInput.value = '';
                        window.location.reload();
                    }
                }
            });
        });
        //post facebook
        // fb.api('/me/feed', 'post', {
        //   message: editInput
        // }, function(response) {
        //   if (!response || response.error) {
        //     alert('Error occured');
        //   } else {
        //     alert('Post ID: ' + response.id);
        //   }
        // });
    }
    render() {
        return (
            <div className = "article">
                <input type="text" ref="editInput" />
                <button onClick = {() => this.submitArticle()}>Post</button>
            </div>
        );
    }
}

export default postArticle;