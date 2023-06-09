import React from "react";
import Drafts from "../../assets/Drafts.svg";
import Bookmarks from "../../assets/Bookmarks.svg";
import Analytics from "../../assets/Analytics.svg";
import Teams from "../../assets/Teams.svg";
import Trending from "../../assets/Trending.svg";
import ListContainer from "./ListContainer";
import SideBarSections from "./SideBarSections";
import Account from "../../assets/Account.svg";
import Notification from "../../assets/Notification.svg";
import { useNavigate } from "react-router-dom";

type SideBarType = {
  actionClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const SideBar = (props: SideBarType) => {
  const navigate = useNavigate();
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
      <button
        key={item.name}
        className="flex items-center gap-3"
        onClick={props.actionClick}
      >
        <img src={item.icon} alt={item.name} />
        <p>{item.name}</p>
      </button>
    );
  });

  const listOfTrends = trends.map((trend) => {
    return <li key={trend}>{trend}</li>;
  });
  return (
    <section className="flex flex-col gap-8 items-end text-left w-[268px] border border-black-100 h-screen">
      <div className="self-start ml-[58px]">
        <h1
          className="text-blue-500 text-[32px] font-medium"
          onClick={() => {
            navigate("/");
          }}
        >
          CHATTER
        </h1>
      </div>
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
      <button className="text-[#FF1400] self-start ml-[58px] ">Log out</button>
    </section>
  );
};

export default React.memo(SideBar);
