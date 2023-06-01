import Logo from "../components/Logo";
import NavLink from "../components/NavLink";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const Home = () => {
  return (
    <div>
      <Logo />
      <NavLink href="#about" title="About" />
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
  );
};

export default Home;
