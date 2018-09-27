import React, { Component } from 'react';

class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts').then(data => data.json().then(res => this.setState({ posts: res })));
  }

  render() {
    const { posts } = this.state;
    const lis = posts.map(p => <li key={p.id}>{p.title}</li>);
    return <ul>{lis}</ul>;
  }
}
export default App;
