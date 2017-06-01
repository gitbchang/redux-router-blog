import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  
  componentDidMount() {
    if(!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);  
    }
  }
  
  render() {
    const { post } = this.props;
    
    if(!post){
      return <div>loading....</div>
    }

    return (
      <div>
        <Link to="/" className="btn btn-info">Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}


function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost }) (PostsShow);