import Notification from "../../assets/Notification.svg";
import Reviewer from "../../assets/reviewer3.png";
import SearchImg from "../../assets/Search.svg";

const Search = () => {
  return (
    <section className="border border-black-100 h-[66px] flex justify-center items-center">
      <div className="flex justify-center items-center gap-[189px]">
        <section className=" flex gap-[24px] justify-start  items-center border border-solid border-black-100 h-[48px] w-[459px] rounded-[8px]">
          <img src={SearchImg} alt="icon" className="ml-[12px]" />
          <input
            type="text"
            placeholder="search chatter"
            className=" h-[27px] w-[180px]"
          />
        </section>
        <section className="flex gap-[14px]">
          <img src={Notification} alt="notification" />
          <img
            src={Reviewer}
            alt="person"
            className="w-[52px] h-[52px] rounded-full"
          />
        </section>
      </div>
    </section>
  );
};

export default Search;
