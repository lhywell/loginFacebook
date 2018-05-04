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
                //facebook initial a appId
                this.addMessage('Initial a appId');
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
            this.addMessage('Check the user login status');
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
            this.addMessage('Login');

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
        this.addMessage('Welcome!  Fetching your information.... ');
        fb.api('/me', (response) => {
            this.setState({
                visible: true,
            })
            this.addMessage('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
        });
    }
    addMessage(message) {
        let dataLog = document.getElementById('dataLog');
        dataLog.insertAdjacentHTML("beforeEnd", '<div>' + message + '</div>');
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
                        <Link to="/article" className="publish">Open</Link>
                        <Route path="/article" component={postArticle} />
                        <Route path="/" component={getArticles} />
                    </div>
                    <div id="dataLog"></div>
                </div>
            </Router>
        );
    }
}

export default App;