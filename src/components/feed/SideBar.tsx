import React from "react";
import Logo from "../base/Logo";
import Drafts from "../../assets/Drafts.svg";
import Bookmarks from "../../assets/Bookmarks.svg";
import Analytics from "../../assets/Analytics.svg";
import Teams from "../../assets/Teams.svg";
import Trending from "../../assets/Trending.svg";
import ListContainer from "./ListContainer";
import SideBarSections from "./SideBarSections";
import Account from "../../assets/Account.svg";
import Notification from "../../assets/Notification.svg";

const SideBar = () => {
  const actionItems = [
    {
      icon: Teams,
      name: "Feed",
    },
    {
      icon: Teams,
      name: "Team Blogs",
    },
    {
      icon: Bookmarks,
      name: "Bookmarks",
    },
    {
      icon: Drafts,
      name: "Drafts",
    },
    {
      icon: Analytics,
      name: "Analytics",
    },
  ];

  const accountItems = [
    {
      icon: Account,
      name: "Account",
    },
    {
      icon: Notification,
      name: "Notification",
    },
  ];

  const trends = [
    "Programing",
    "Data Science",
    "Technology",
    "Machine Learning",
    "Politics",
  ];

  const titles = ["Overview", "Trending", "Personal Account"];

  const listOfActionItems = actionItems.map((item) => {
    return (
      <li key={item.name} className="flex items-center gap-3">
        <img src={item.icon} alt={item.name} />
        <p>{item.name}</p>
      </li>
    );
  });

  const listOfTrends = trends.map((trend) => {
    return <li>{trend}</li>;
  });
  return (
    <section className="flex flex-col gap-8 items-center text-left w-[268px] border border-black-100 h-screen">
      <Logo fontSize="5xl" fontWeight="semibold" />
      <SideBarSections title={titles[0]}>
        <ListContainer>{listOfActionItems}</ListContainer>
      </SideBarSections>
      <div className=" flex flex-col gap-[19px] ">
        <h4 className="flex items-center gap-3">
          Trending Tags{" "}
          <span>
            <img src={Trending} alt="trending icon" />
          </span>
        </h4>
        <ListContainer>{listOfTrends}</ListContainer>
      </div>
      <SideBarSections title={titles[2]}>
        <ListContainer>
          {accountItems.map((item) => {
            return (
              <li key={item.name} className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            );
          })}
        </ListContainer>
      </SideBarSections>
      <button className="text-[#FF1400]">Log out</button>
    </section>
  );
};

export default React.memo(SideBar);
