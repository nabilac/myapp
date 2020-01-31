import React, { Component } from 'react';
import YouTubeComp from '../YouTubeComp/YouTubeComp';

class YouTube extends Component {
    render() {
        return (
            <div>
                <p>Youtube Component</p>
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
                <YouTubeComp/>
            </div>
        );
    }
}

export default YouTube;