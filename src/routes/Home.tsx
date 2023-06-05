import Logo from "../components/base/Logo";
import NavLink from "../components/base/NavLink";
import PrimaryButton from "../components/base/PrimaryButton";
import SecondaryButton from "../components/base/SecondaryButton";
import aboutpic1 from "../assets/aboutpic1.png";
import reviewPic from "../assets/reviewPic.png";
import reviewer1 from "../assets/reviewer1.png";
import reviewer2 from "../assets/reviewer2.png";
import reviewer3 from "../assets/reviewer3.png";
import {
  faChartLine,
  faUsers,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const cards = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faChartLine}
          size="2xl"
          className="bg-[#D6D1F833]/[20%] rounded-full p-7"
        />
      ),
      title: "Analytics",
      content:
        "Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faUsers}
          size="2xl"
          className="bg-[#D6D1F833]/[20%] rounded-full p-7"
        />
      ),
      title: "Social interactions",
      content:
        "Users on the platform can interact with posts they like, comment and engage in discussions",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faNewspaper}
          size="2xl"
          className="bg-[#D6D1F833]/[20%] rounded-full p-7"
        />
      ),
      title: "Content creation",
      content:
        "Write nice and appealing with our in-built markdown, a rich text editor",
    },
  ];

  const cardList = cards.map((card) => {
    return (
      <div
        key={card.title}
        className="flex flex-col pt-[18px] gap-3 border-solid border-2 rounded-lg pl-[18px] w-[306px] h-[324px]"
      >
        <div>{card.icon}</div>
        <h3 className="text-2xl">{card.title}</h3>
        <p className="sub-text w-[254px] text-[#626262]">{card.content}</p>
      </div>
    );
  });

  return (
    <div>
      <nav className="flex py-[13px] px-[72px] justify-between items-center">
        <Logo />
        <div className="flex gap-6">
          <NavLink href="#about" title="Home" />
          <NavLink href="#about" title="About us" />
          <NavLink href="#about" title="Contact" />
          <NavLink href="#about" title="Blogs" />
        </div>
        <div className="flex gap-6">
          <PrimaryButton
            value="Sign up"
            handleClick={() => {
              window.location.href = "/signup";
            }}
          />
          <SecondaryButton
            value="Log in"
            handleClick={() => {
              window.location.href = "/login";
            }}
          />
        </div>
      </nav>
      <section className="flex justify-center items-center h-[764px] bg-[#000000]/[50%]">
        <div className="flex flex-col gap-9 w-[984px] h-[240px] ">
          <section className="flex flex-col gap-5">
            <h2 className="text-white">
              Welcome to Chatter: A Haven for Text-Based Content
            </h2>
            <p className="text-white text-2xl w-[750px]">
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
          </section>
          <PrimaryButton
            value="Sign up"
            handleClick={() => {
              window.location.href = "/signup";
            }}
          />
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col justify-center items-center p-[72px]"
      >
        <div className="flex gap-[84px]">
          <section className="flex flex-col gap-[34px]">
            <h2>About Chatter</h2>
            <p className="sub-text w-[686px] h-[162px]">
              Chatter is a multi-functional platform where authors and readers
              can have access to their own content. It aims to be a traditional
              bookworm’s heaven and a blog to get access to more text based
              content. Our vision is to foster an inclusive and vibrant
              community where diversity is celebrated. We encourage
              open-mindedness and respect for all individuals, regardless of
              their backgrounds or beliefs. By promoting dialogue and
              understanding, we strive
            </p>
          </section>
          <img src={aboutpic1} alt="An image" />
        </div>
        <div className="pt-[96px] pb-[107px] flex flex-col justify-center items-center gap-[54px]">
          <section className="flex flex-col gap-[24px] w-[1040px] ">
            <h2 className="text-center">Why you should join chatter</h2>
            <p className="">
              Our goal is to make writers and readers see our platform as their
              next heaven for blogging, ensuring ease in interactions,
              connecting with like-minded peers, have access to favorite content
              based on interests and able to communicate your great ideas with
              people
            </p>
          </section>
          <section className="flex gap-12 justify-start">{cardList}</section>
        </div>
      </section>
      <section
        id="reviews"
        className="bg-[#FFEDCC80]/[50%] h-[492px] flex justify-center items-center "
      >
        <div className="flex flex-row gap-[26px]">
          <div className="flex flex-col justify-center items-center p-8">
            <img src={reviewPic} alt="Adebobola" className="rounded-full" />
          </div>
          <section className="w-[800px] flex flex-col justify-center gap-[24px]">
            <div className="flex flex-col gap-[48px]">
              <p>
                "Chatter has become an integral part of my online experience. As
                a user of this incredible blogging platform, I have discovered a
                vibrant community of individuals who are passionate about
                sharing their ideas and engaging in thoughtful discussions.”
              </p>
              <h3>
                <span className="text-[32px]">Adebobola Muhydeen, </span>
                <span className="sub-text">
                  Software developer at Apple
                </span>{" "}
              </h3>
            </div>
            <PrimaryButton value="Join chatter" handleClick={() => {}} />
          </section>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex gap-[113px] py-24 px-24">
          <div className="flex gap-7">
            <div className="flex flex-col gap-[91px]">
              <img src={reviewer1} alt="person" className="rounded-full" />
              <img src={reviewer2} alt="person" className="rounded-full" />
            </div>
            <img
              src={reviewer3}
              alt="person"
              className="rounded-full self-center "
            />
          </div>
          <div className="flex flex-col gap-8 ">
            <div className="w-[655px] flex flex-col gap-6">
              <h2>Write, read and connect with great minds on chatter</h2>
              <p>
                Share people your great ideas, and also read write-ups based on
                your interests. connect with people of same interests and goals{" "}
              </p>
            </div>
            <PrimaryButton value="Get started" handleClick={() => {}} />
          </div>
        </div>
      </section>
      <footer className="bg-[#FFEDCC80]/[50%] h-[402px] flex justify-center gap-[218px] pt-[60px]">
        <Logo />
        <div className="flex flex-col gap-7">
          <h3 className="heading3">Explore</h3>
          <div className="flex flex-col gap-[16px]">
            <p>community</p>
            <p>Trending blogs</p>
            <p>Chatter for teams</p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <h3 className="heading3">Support</h3>
          <div className="flex flex-col gap-[16px]">
            <p>Support docs</p>
            <p>Join slack</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <h3 className="heading3">Official blog</h3>
          <div className="flex flex-col gap-[16px]">
            {" "}
            <p>Official blog</p>
            <p>Engineering blog</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
