import React, { Component } from 'react';
import './LifeCycleComp.css';

import { connect } from 'react-redux';

class LifeCycleComp extends Component {

    //default dari es6 untuk mendefinisikan variabel
    //yang akan digunakan
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('construktor')
    }

    //parameter ini memiliki nilai props dan state
    static getDriveredStateFormProps(props, state) {
        console.log('getDriveredStateFormProps')
        return null;
    }

    //component yang akan di di load pertamakali
    componentDidMount() {
        console.log('componentDidUpdate')
        setTimeout(() => {
            this.setState({
                count: 2
            })
        }, 3000)
    }

    //component yang akan mengatur bahwa ada perubahan atau tidak
    // return bisa diisi false atau true
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update')
    }

    componentWillUnmount() {
        console.log('compoenen will unmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <button className="btn">Component Button {this.state.count}</button>
                <hr />
                <p>ToTAL ORDER: {this.props.order}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(LifeCycleComp);