import React from "react";
import "./style/loader1.scss";

const Loader = (props) => {
    const {type} = props;

    if (type === 1) {
        return (
            <div className="container">
                <div className="content">
                    <div className="purple"/>
                    <div className="yellow"/>
                    <div className="pink"/>
                </div>
            </div>
        )
    } else if (type === 2) {
        return(
            <div className="container">
                <div className="textLoad">
                    <h1>Loading</h1>
                </div>
            </div>
        )
    }
}

export default Loader;
