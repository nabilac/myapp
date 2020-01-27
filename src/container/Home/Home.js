import React, { Component } from 'react';

import { Route, NavLink, HashRouter } from "react-router-dom";

import YouTubeComp from '../YouTubeComp/YouTubeComp';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

import { Provider } from 'react-redux';
import store from '../../store';

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

                {/* <p>Youtube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12"
                    title="Tutorial ReactJs - Bagian 1"
                    desc=" 2x ditonton, 2 hari yang lalu"
                />
                <YouTubeComp 
                    time="8.02"
                    title="Tutorial ReactJs - Bagian 2"
                    desc=" 4x ditonton, 4 hari yang lalu"
                />
                <YouTubeComp 
                    time="5.04"
                    title="Tutorial ReactJs - Bagian 3"
                    desc=" 5x ditonton, 5 hari yang lalu"
                />
                <YouTubeComp 
                    time="4.12"
                    title="Tutorial ReactJs - Bagian 4"
                    desc=" 6x ditonton, 6 hari yang lalu"
                />
                <YouTubeComp/> */}

                {/* <p>Counter</p>
                <hr/>
                <Product/> */}

                {/* <p>Life Cycle Component</p>
                {
                    this.state.showComponent ?
                        <LifeCycleComp /> : null
                } */}
                <Provider store={store}>
                    <HashRouter>
                        <div>
                            <ul>
                                <li>
                                    <NavLink to="/lifeCycle">lifeCycle</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product">product</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/youtube">youtube</NavLink>
                                </li>
                            </ul>
                            <div>
                                <Route path="/lifeCycle">
                                    <LifeCycleComp />
                                </Route>
                                <Route path="/product">
                                    <Product />
                                </Route>
                                <Route path="/youtube">
                                    <YouTubeComp />
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