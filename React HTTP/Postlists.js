import React, { Component } from "react";
import axios from "axios";
export class Postlists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMesg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ errorMesg: error });
      });
  }

  render() {
    const { posts, errorMesg } = this.state;
    return (
      <div>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}

        {errorMesg ? <div>{errorMesg}</div> : null}
      </div>
    );
  }
}

export default Postlists;
