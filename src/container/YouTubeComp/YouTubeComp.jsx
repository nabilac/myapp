import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-tumb">
                <img src="" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    );
};

YouTubeComp.defaultProps ={
    time: '00:00',
    title: 'Title Here',
    desc: '0x ditonton, 0 hari yang lalu'
}

export default YouTubeComp;