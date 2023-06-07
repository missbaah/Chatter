import React from "react";
import SideBar from "../components/feed/SideBar";
import Search from "../components/feed/Search";
import Posts from "../components/feed/Posts";

const Feed = () => {
  return (
    <main className="flex ">
      <SideBar />
      <section className="flex-1">
        <Search />
        <Posts />
      </section>
    </main>
  );
};

export default React.memo(Feed);
