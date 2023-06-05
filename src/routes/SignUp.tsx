import PrimaryButton from "../components/base/PrimaryButton";
import SecondaryButton from "../components/base/SecondaryButton";
import SideBar from "../components/base/SideBar";
import Input from "../components/forms/Input";

const SignUp = () => {
  return (
    <main className="flex ">
      <section className="bg-black/50 h-[1024px] w-[622px] flex flex-col justify-center px-9">
        <SideBar />
      </section>
      <section className="flex flex-col items-center justify-center flex-1 ">
        <div className="w-[520px]">
          <div id="progressbar" className="flex flex-col gap-6">
            <section className="flex justify-between w-[440px]">
              <button
                className="uppercase font-bold text-base"
                onClick={() => {
                  window.location.href = "/signup";
                }}
              >
                Register
              </button>
              <button
                className="uppercase font-bold text-base"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Login
              </button>
            </section>
            <section className="flex">
              <div className="w-[220px] h-[6px] bg-blue-500"></div>
              <div className="w-[220px] h-[6px] bg-[#D9D9D9]"></div>
            </section>
            <h3 className="heading3 text-center mb-6">
              Register as a Writer/Reader
            </h3>
          </div>

          <form action="" className="flex flex-col gap-6">
            <div className="flex gap-3">
              <Input label="First name" type="text" width="252px" />
              <Input label="Last name" type="text" width="252px" />
            </div>
            <div className="flex flex-col gap-3">
              <label>You are joining as?</label>
              <select
                name=""
                id=""
                className={`border-solid border-2 p-4 rounded-lg`}
              >
                <option value="Writer">Writer</option>
                <option value="Reader">Reader</option>
              </select>
            </div>
            <Input label="Email address" type="email" />
            <Input label="Password" type="password" />
            <Input label="Confirm Password" type="password" />
            <PrimaryButton
              value="Create account"
              handleClick={() => {}}
              width="529px"
            />
            <SecondaryButton
              value="Sign up with google"
              handleClick={() => {}}
              width="529px"
              borderColor="#D0D0D0"
            />
            <SecondaryButton
              value={`Sign up with LinkedIn`}
              handleClick={() => {}}
              width="529px"
              borderColor="#D0D0D0"
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
