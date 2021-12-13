import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from "react-twitter-embed";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="Text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2> &nbsp; &nbsp; What is happening</h2>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Ganv_ka_ladka"
          options={{ height: 400 }}
        />
          <TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#reactjs is awesome', via: 'Ganv_ka_ladka' }}
  />
      </div>
    </div>
  );
}

export default Widgets;
