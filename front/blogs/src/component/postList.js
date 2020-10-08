import React, {Component} from "react";
import {loadBugs} from "../store/bugs";
import {connect} from "react-redux";
import {loadPosts} from "../store/post";

export class PostList extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.props.loadPosts();
        // this.setState({posts: this.props.posts})
    }

    render() {
        return (<ul>
            {this.props.posts.map(m => (
                <li key={m.id}>{m.name}</li>
            ))}
            sss
        </ul>)
    }
}

const mapStateToProps = state => ({
    posts: state.entities.posts.list
})
const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)