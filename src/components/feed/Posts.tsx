import PrimaryButton from "../base/PrimaryButton";

const Posts = () => {
  const filters = ["For you", "Featured", "Recent"];

  const listOfFilters = filters.map((filter) => {
    return <button key={filter}>{filter}</button>;
  });

  return (
    <section className="border border-black-100 ml-6 mt-[30px] mr-[72px] h-screen flex flex-col gap-[49px] items-center">
      <section id="top" className="flex justify-between w-[856px]  mt-[22px]">
        <div className="flex flex-col gap-3 ">
          <h3 className="font-medium text-2xl">FEED</h3>
          <p className="text-black-400">Explore different content you love</p>
        </div>
        <PrimaryButton value="Post a content" handleClick={() => {}} />
      </section>
      <section id="posts-container">
        <div
          id="post-nav"
          className=" h-[80px] border border-black-100 rounded-[8px] w-[856px] flex justify-around"
        >
          {listOfFilters}
        </div>
        <div
          id="posts-rendered"
          className="border border-black-100 rounded-[8px] w-[856px]"
        ></div>
      </section>
    </section>
  );
};

export default Posts;
