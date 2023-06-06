import React from "react";

type SideBarSectionsProps = {
  children: React.ReactNode;
  title: string;
};

const SideBarSections = ({ children, title }: SideBarSectionsProps) => {
  return (
    <div className=" flex flex-col gap-[33px]">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default React.memo(SideBarSections);
