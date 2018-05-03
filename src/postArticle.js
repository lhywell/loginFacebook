import React, {
  Component
} from 'react';
import './App.css';

class postArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fb: null
    }
  }
  componentDidMount() {
  }
  submitArticle() {
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
      < div className = "article" >
        < input type = "text"
        ref = "editInput" / >
        < button onClick = {
          () => this.submitArticle()
        } > post a article < /button> < /div >
    );
  }
}

export default postArticle;