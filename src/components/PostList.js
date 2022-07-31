import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList(){
    return this.props.posts.map(post =>{
      return(
        <div key={post.id} className="item">
         <i className="large middle aligned icon user"/>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderList()}</div>
  }
}
 //reducers indexed JS file,assigned our reducer to this post key inside of our combined reducers call.
//state object right here is going to have a property called posts and that property
//is going to hold all of the data that our reducer has returned always  !new object!.
const mapStateToProps = state =>{
  return { posts: state.posts}
 }
// connecting data to our component via props(import redux)
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
