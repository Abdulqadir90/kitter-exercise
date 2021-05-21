import React from "react";
import Username from "./Username";
import meows from "../meows.json";
import Avatar from "./Avatar";
import Icon from "./Icon"
import Hashtag from "./Hashtag";

const Meow = ({ user, text, hashtags, replies, likes }) => (
  <div className="Meow">
    <div className="top-section">
      <Username userName={meows[0].user.username}  /> 
      <Avatar photo={meows[0].user.photo}/>
    </div>
    <div className="mid-section">
      <p>{text}</p>
      {hashtags.map(Hashtag => {
        return (
      <div className="hashtags">
      <Hashtag>#{Hashtag}</Hashtag>
      </div>
)
})}
      
    </div>
    <div className="bottom-section"></div>
    <Icon type="replies"  number={replies} />
     <Icon type="likes" number={likes}/>
  </div>
);


export default Meow;
