import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: null,
            error: null
        }
    }

    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Hello world!',
            body: 'it works',
            userId: 123
        }).then(response => {
            console.log(response.data)
            this.setState({
                posts: response.data
            })
        }).catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    render() {
        const posts = this.state.posts
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>
                {posts ? (
                    <div key={posts.id}>
                        <h1>{posts.title}</h1>
                        <p>{posts.body}</p>
                        <p>{posts.id}</p>
                        <p>{posts.userId}</p>
                    </div>
                ) : (
                this.state.error ? <p>{this.state.error}</p> : <h3>No posts</h3>
                )
                }
            </div>
        )
    }
}

export default HTTPPost