import React from "react";

type ListContainerProps = {
  children: React.ReactNode;
};

const ListContainer = ({ children }: ListContainerProps) => {
  return (
    <ul className="w-[174px] flex flex-col gap-3 ml-[30px]">{children}</ul>
  );
};

export default React.memo(ListContainer);
