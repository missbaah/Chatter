import PrimaryButton from "../components/base/PrimaryButton";
import SideBar from "../components/base/SideBar";
import Input from "../components/forms/Input";
import ProgessBar from "../components/forms/ProgessBar";

const LogIn = () => {
  return (
    <main className="flex ">
      <SideBar />
      <section className="flex flex-col items-center justify-start mt-[96px] flex-1 ">
        <ProgessBar title="Welcome Back" page="login" />
        {/* <div className="w-[520px]">
          <div id="progressbar" className="flex flex-col gap-6">
            <section className="flex justify-between w-[440px]">
              <button
                className="uppercase font-bold text-base"
                onClick={useCallback(() => {
                  window.location.href = "/signup";
                }, [])}
              >
                Register
              </button>
              <button className="uppercase font-bold text-base">Login</button>
            </section>
            <section className="flex">
              <div className="w-[220px] h-[6px] bg-[#D9D9D9]"></div>
              <div className="w-[220px] h-[6px] bg-blue-500"></div>
            </section>
            <h3 className="heading3 text-center mt-[76px] mb-6">
              Welcome Back
            </h3>
          </div>
        </div> */}
        <form action="" className="flex flex-col gap-6">
          <Input label="Email address" type="email" />
          <Input label="Password" type="password" />
          <PrimaryButton value="Login" handleClick={() => {}} width="529px" />
        </form>
      </section>
    </main>
  );
};

export default LogIn;
