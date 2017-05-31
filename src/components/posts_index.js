import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
  
  // ***WITHOUT lodash***
  /*
  // object.keys gives us an array of the object's keys so we can map over it
  const postIds = Object.keys(this.props.posts);
   return postIds.map(id => {
      return (
        <li className="list-group-item" key={id}>
          {this.props.posts[id].title}
        </li>
      )
    })
  */
    
   return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  }
  
  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

// instead of mapDispatchToProps, we use the action creator here instead
// mapDispatchToProps is okay to use if we need to do some manipulation with the fetched Posts
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);