import React, { Component } from 'react';
import './BlogPost.css';

import Post from './Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        form: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getDataApi = () => {
        //fake API dari json-server
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then(result => {
                this.setState({
                    post: result.data
                })
            })
    }

    postDataApi = () => {
        axios.post('http://localhost:3004/posts', this.state.form)
            .then(result => {
                console.log(result);
                this.getDataApi();
                this.setState({
                    form: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    }
                });
            })
    }

    putDataApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.form.id}`, this.state.form)
            .then((result) => {
                console.log(result);
                this.getDataApi();
                this.setState({
                    form: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    }
                });
            })
    }

    deleteDataApi = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`, this.state.form)
            .then((result) => {
                console.log(result);
                this.getDataApi();
            })
    }

    componentDidMount() {
        this.getDataApi();
    }

    handleChange = (e) => {
        let formNew = { ...this.state.form };
        let timeStamp = new Date().getTime();

        if (!this.state.isUpdate) {
            formNew['id'] = timeStamp;
        }
        formNew[e.target.name] = e.target.value;

        this.setState({
            form: formNew
        })
    }

    handleUpdate = (data) => {
        this.setState({
            form: data,
            isUpdate: true
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataApi();
        } else {
            this.postDataApi();
        }
    }

    handleRemove = () => {
        this.deleteDataApi();
    }

    render() {
        return (
            <>
                <p className="section-title">Halaman Blog Post</p>

                <div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={this.state.form.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Body</label>
                        <input type="text" name="body" value={this.state.form.body} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>

                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                    })
                }

            </>
        );
    }
}

export default BlogPost;