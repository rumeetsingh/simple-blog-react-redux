import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    };

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="card mt-3 mb-3" key={post.id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                    <div className="card-footer"><small>{post.userId}</small></div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { posts : state.posts };
}

export default connect(mapStateToProps,{ fetchPosts : fetchPosts })(PostList);