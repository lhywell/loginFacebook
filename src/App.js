import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import postArticle from './postArticle'
import getArticles from './getArticles'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fb: null,
            visible: true
        }
    }
    componentDidMount() {
        window.fbAsyncInit = () => {
            const fb = window.FB;
            if (fb) {
                this.setState({
                    fb: fb,
                })
                //facebook初始化一个用户编号
                fb.init({
                    appId: '173394849991240',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v2.8'
                });
            }
        };
    }
    myFacebookLogin = () => {
        let fb = this.state.fb;
        console.log(this.state.fb)
        if (fb) {
            //Check the user login status.
            fb.getLoginStatus((response) => {
                this.statusChangeCallback(response);
            });
        }
    }
    statusChangeCallback(response) {
        let fb = this.state.fb;
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.loginSuccess();
        } else {
            // The person is not logged into your app.Let the user login.
            fb.login((response) => {
                console.log(response)
                this.loginSuccess();
            }, {
                scope: 'manage_pages,publish_pages' //try 'publish_actions'
            });
        }
    }
    loginSuccess() {
        //login success and display the input box and get the user name
        let fb = this.state.fb;
        console.log('Welcome!  Fetching your information.... ');
        fb.api('/me', (response) => {
            this.setState({
                visible: true,
            })
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
        });
    }
    postArticle() {
        //post a article
        let fb = this.state.fb;
        let editInput = this.refs.editInput.value
        console.log(editInput)
        fb.api('/me/feed', 'post', {
            message: editInput
        }, function(response) {
            if (!response || response.error) {
                alert('Error occured');
            } else {
                alert('Post ID: ' + response.id);
            }
        });
    }
    render() {
        return (
            <Router>
                <div className = "App" >
                    <header className="header">
                        <div id = "status" className="staus"></div>
                        <button onClick = {() => this.myFacebookLogin()}>Login with Facebook</button>
                    </header>
                    <div className="content">
                        <Link to="/article" className="publish">发表文章</Link>
                        <Route path="/article" component={postArticle} />
                        <Route path="/" component={getArticles} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;