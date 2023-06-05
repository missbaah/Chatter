import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className="w-[550px] flex flex-col gap-6">
      <Logo />
      <p className="text-white text-2xl ">
        Unleash the Power of Words, Connect with Like-minded Readers and Writers
      </p>
    </div>
  );
};

export default SideBar;
