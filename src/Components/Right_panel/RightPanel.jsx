import React from "react";
import "./RightPanel.css";
import {
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function RightPanel() {
  return (
    <div className="RightPanel">
      <div className="RightPanel__input">
        <SearchIcon className="RightPanel__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="RightPanel__widgetContainer">
        <h2 className="happening-text">What's happening</h2>

        <TwitterTweetEmbed tweetId={"1501338589933809666"} />
        {/* <TwitterTweetEmbed tweetId={"1501240461301854215"} /> */}

      </div>
    </div>
  );
}

export default RightPanel;
