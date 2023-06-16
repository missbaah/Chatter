import PrimaryButton from "../base/PrimaryButton";
import Post from "./Post";
import Largeline from "../../assets/Rectangle 37.svg";

const Analytics = () => {
  return (
    <section className="mt-[36px] flex flex-col justify-center items-center gap-[49px]">
      <section className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-[24px]">
            <h5 className="text-[32px] font-medium">Posts analytics</h5>
            <p className="text-[32px] font-medium">
              May 2023,{" "}
              <span className="text-[#626262] text-2xl">25days so far</span>
            </p>
          </div>
          <img src={Largeline} alt="Line" />
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-[24px] font-medium m">Post highlight</h5>
          <div className="flex gap-3 items-center">
            <span className="text-[32px] font-medium">Top Posts</span>
            <span className="text-[18px] font-normal text-[#626262]">
              earned 2980 impressions
            </span>
          </div>
        </div>
        <div>
          <Post />
          <PrimaryButton value="View post activity" handleClick={() => {}} />
        </div>
      </section>
      <section className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h5 className="text-[24px] font-medium">Posts summary</h5>
            <p className="text-[18px] font-normal text-[#626262]">
              May 2023 summary
            </p>
          </div>
          <img src={Largeline} alt="Line" />
        </div>
        <section className="flex flex-col gap-[24px]">
          <div className="flex gap-[118px]">
            <div className="flex flex-col gap-1">
              <span className="text-[24px] font-medium text-[#626262]">
                Post
              </span>
              <span className="text-[24px] font-medium">3</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[24px] font-medium text-[#626262]">
                Post
              </span>
              <span className="text-[24px] font-medium">3</span>
            </div>
          </div>
          <div className="flex gap-[118px]">
            <div className="flex flex-col gap-1">
              <span className="text-[24px] font-medium text-[#626262]">
                Post
              </span>
              <span className="text-[24px] font-medium">3</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[24px] font-medium text-[#626262]">
                Post
              </span>
              <span className="text-[24px] font-medium">3</span>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Analytics;
