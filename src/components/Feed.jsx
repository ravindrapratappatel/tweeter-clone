import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import DB from "./Firebase";
import { onSnapshot, collection } from "firebase/firestore";
function Feed() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(DB, "posts"), (querySnapshot) => {
      setposts(querySnapshot.docs.map((docs) => docs.data()));
      //console.log("Data", querySnapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      {/*header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />

      {/*tweet box*/}
      {console.log(posts[0])}
      {posts.map((post) => { 
        return ( <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
         // image={post.image}
          avatar={post.avatar}
        />
        )
      })}
    </div>
  );
}

export default Feed;
