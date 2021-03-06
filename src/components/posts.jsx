/*
axios.get(url)
axios.post(url,obj)
axios.deleter(url)
axios.put(url,obj)//for one obj
axios.patch(url,data)//for multiple objects

life cycle methods
componentDidMount()
componentDidUpdate()
componentDidWillunmount()
*/
import axios from "axios";
import React, { Component } from "react";
import PostsTable from "./poststables";

class Posts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <PostsTable posts={this.state.posts} />
      </div>
    );
  }
}

export default Posts;