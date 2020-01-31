import React, { Component } from 'react';

import { Route, NavLink, HashRouter } from "react-router-dom";

import YouTubeComp from '../YouTubeComp/YouTube';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

import { Provider } from 'react-redux';
import store from '../../store';

import './Home.css';

class Home extends Component {

    //menampilkan show button dnegan true dan false
    state = {
        showComponent: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: true
            })
        }, 5000)
    }

    render() {
        return (

            <>
                {/* <p>Life Cycle Component</p>
                {
                    this.state.showComponent ?
                        <LifeCycleComp /> : null
                } */}
                <Provider store={store}>
                    <HashRouter>
                        <div>
                            <ul className="header">
                                <li>
                                    <NavLink to="/lifeCycle">lifeCycle</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product">product</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/youtube">youtube</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blogPost">blogPost</NavLink>
                                </li>
                            </ul>
                            <div className="content">
                                <Route path="/lifeCycle">
                                    <LifeCycleComp />
                                </Route>
                                <Route path="/product">
                                    <Product />
                                </Route>
                                <Route path="/youtube">
                                    <YouTubeComp />
                                </Route>
                                <Route path="/blogPost">
                                    <BlogPost />
                                </Route>
                            </div>
                        </div>
                    </HashRouter>
                </Provider>
            </>
        );
    }
}

export default Home;