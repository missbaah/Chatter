import Logo from "../components/Logo";
import NavLink from "../components/NavLink";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const Home = () => {
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
            <h2 className="text-white text-5xl/[72px] font-bold">
              Welcome to Chatter: A Haven for Text-Based Content
            </h2>
            <p className="text-white text-2xl">
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
    </div>
  );
};

export default Home;
