import Notification from "../../assets/Notification.svg";
import Reviewer from "../../assets/reviewer3.png";

const Search = () => {
  return (
    <section>
      <div>
        <input type="text" pattern="search chatter" />
        <div>
          <img src={Notification} alt="notification" />
          <img src={Reviewer} alt="person" />
        </div>
      </div>
    </section>
  );
};

export default Search;
