import React, { useState } from "react";
import SideBar from "../components/feed/SideBar";
import Search from "../components/feed/Search";
import Posts from "../components/feed/Posts";
import Analytics from "../components/feed/Analytics";

const Feed = () => {
  const [screen, setScreen] = useState("analytics");

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const feedScreen = event.currentTarget.childNodes[1].textContent;
    console.log(feedScreen);
    if (feedScreen) {
      setScreen(feedScreen);
    }
  };

  return (
    <main className="flex ">
      <SideBar actionClick={handleButtonClick} />
      <section className="flex-1">
        <Search />
        {screen == "Feed" || screen == "" ? (
          <Posts />
        ) : screen == "Analytics" ? (
          <Analytics />
        ) : undefined}
      </section>
    </main>
  );
};

export default React.memo(Feed);
