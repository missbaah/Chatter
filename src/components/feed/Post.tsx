import Reviewer1 from "../../assets/reviewer1.png";
import reading from "../../assets/Reading.svg";
import BlogImage from "../../assets/postimage.svg";
import Reactions from "../../assets/Reaction.svg";
import Analytics from "../../assets/ic_outline-analytics.svg";
import Comments from "../../assets/Comments.svg";

const Post = () => {
  return (
    <section className="w-[620px] h-[auto] ml-[44px] mt-[30px] flex flex-col gap-3 pb-[35px] border-b border-b-[#D0D0D0]">
      <section id="post-details" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex gap-[12px] items-center">
            <img
              src={Reviewer1}
              alt="person"
              className="rounded-full w-[105px] h-[105px]  "
            />
            <div>
              <h5 className="font-medium text-2xl">Name</h5>
              <div className="flex gap-2 text-black-400 font-normal text-lg">
                <p className="">Job title</p>
                <p>Date</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-[32px] font-medium ">
              Starting out as a Product designer
            </h5>
            <div className="flex gap-[10px]">
              <img src={reading} alt="reading icon" />
              <p className="text-[16px] font-normal text-black-400 ">
                10 mins read
              </p>
            </div>
          </div>
        </div>
        <p id="excerpt" className="font-normal text-[18px] text-black-400">
          Embarking on a journey as a product designer can be an exhilarating
          and fulfilling experience. As a profession that bridges the realms of
          art, technology, and problem-solving, product design offers an
          opportunity to shape the way people interact with the world around
          them.
        </p>
      </section>
      <img src={BlogImage} alt="blog image" />
      <section className="flex justify-between text-black-400">
        <div className="flex gap-[11px] ">
          <img src={Comments} alt="comment icon" />
          <span>200</span>
        </div>
        <div className="flex gap-[11px]">
          <img src={Reactions} alt="reactions icon" />
          <span>200</span>
        </div>
        <div className="flex gap-[11px]">
          <img src={Analytics} alt="analytics icon" />
          <span>200</span>
        </div>
      </section>
    </section>
  );
};

export default Post;
