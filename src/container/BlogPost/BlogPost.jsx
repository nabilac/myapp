import React, { Component } from 'react';
import './BlogPost.css';

import Post from './Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        title: '',
        body: ''
    }

    getDataApi = () => {
        //fake API dari json-server
        axios.get('http://localhost:3004/posts')
            .then(result => {
                this.setState({
                    post: result.data
                })
            })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json =>{
        //         this.setState({
        //             post: json
        //         })
        //     })

        this.getDataApi();
    }

    handleRemove = (data) =>{
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res)=>{
            console.log(res);
            this.getDataApi();
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.title + ',' + this.state.body)
    }

    render() {
        return (
            <>
                <p className="section-title">Halaman Blog Post</p>
                
                <div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Body</label>
                        <input type="text" name="body" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>

                {
                    this.state.post.map(post=> {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
                
            </>
        );
    }
}

export default BlogPost;