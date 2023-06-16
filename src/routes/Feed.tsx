import React, { useState } from "react";
import SideBar from "../components/feed/SideBar";
import Search from "../components/feed/Search";
import Posts from "../components/feed/Posts";
import Analytics from "../components/feed/Analytics";
import Editor from "../components/feed/Editor";

const Feed = () => {
  const [screen, setScreen] = useState("");

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const feedScreen = event.currentTarget.childNodes[1].textContent;
    console.log(feedScreen);
    if (feedScreen) {
      setScreen(feedScreen);
    }
  };

  const handlePostClick = (event: React.MouseEvent<Element>) => {
    const buttonId = event.currentTarget.id;
    console.log(buttonId);
    if (buttonId) {
      setScreen(buttonId);
    }
  };

  return (
    <main className="flex ">
      <SideBar actionClick={handleButtonClick} />
      <section className="flex-1">
        <Search />
        {screen == "Feed" || screen == "" ? (
          <Posts onPostClick={handlePostClick} />
        ) : screen == "Analytics" ? (
          <Analytics />
        ) : screen == "Post" ? (
          <Editor />
        ) : undefined}
      </section>
    </main>
  );
};

export default React.memo(Feed);
