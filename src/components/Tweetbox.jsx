import { Button, Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Tweetbox.css";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import DB from "./Firebase";
function Tweetbox() {
  const [tweet, settweet] = useState("");

  function handleclick(e) {
    e.preventDefault();
    setDoc(doc(DB, "posts", tweet), {
      avatar: "https://source.unsplash.com/user/erondu/1600x900",
      displayName: "Ravi",
     // image: "https://source.unsplash.com/user/erondu/300x250",
      text: tweet,
      username: "ravi12",
      verified: true,
    });
    settweet('');
  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://source.unsplash.com/user/erondu/250x250" />
          <input
            value={tweet}
            placeholder="What is happening"
            onChange={(e) => settweet(e.target.value)}
          />
        </div>
        <Button className="tweet__btn" onClick={handleclick}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
