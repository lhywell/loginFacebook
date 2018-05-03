import React, {
  Component
} from 'react';
import './App.css';

class getArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    }
  }
  componentDidMount() {
    const $ = window.$;
    let that = this;
    $(function() {
      $.ajax({
        type: "GET",
        url: "http://localhost:4000/list",
        dataType: "json",
        success: function(data) {
          that.setState({
            result: data
          })
        }
      });
    });
  }
  render() {
    let result = this.state.result;
    let dom = [];
    if (result && result.length > 0) {
      result.map((item, index) => {
        return dom.push(<li key={index}>{item.title}</li>)
      });
    }

    return (
      <div className = "alist">
        <h2>文章列表</h2>
        <ul>
        {dom}
        </ul>
      </div>
    );
  }
}

export default getArticles;