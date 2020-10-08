import React, {Component} from 'react';
import PostList from "../postList";
import {loadPosts} from "../../store/post";
import {connect} from "react-redux";
import {postLogin} from "../../store/account/auth";

class Main extends Component {
    componentDidMount() {
        this.props.postLogin()
    }

    render() {

        return (
            <PostList/>
        );
    }


}
const mapStateToProps = state => ({
    token: state.token
})
const mapDispatchToProps = dispatch => ({
    postLogin: () => dispatch(postLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
// export default Main;
