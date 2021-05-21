import React from "react";


const Avatar = (props) => {
    return (
        <div className="Avatar">
            <img src={props.photo}></img>
        </div>
    );
}

export default Avatar;
