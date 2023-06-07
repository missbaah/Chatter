import Logo from "./Logo";

const SideBarForms = () => {
  return (
    <section className=" bg-black-500/50 h-[1024px] w-[622px] flex flex-col justify-center px-9">
      <div className="w-[550px] flex flex-col gap-6">
        <Logo />
        <p className="text-white text-2xl ">
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
      </div>
    </section>
  );
};

export default SideBarForms;
