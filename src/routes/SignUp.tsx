import PrimaryButton from "../components/base/PrimaryButton";
import SecondaryButton from "../components/base/SecondaryButton";
import SideBar from "../components/base/SideBar";
import Input from "../components/forms/Input";
import ProgessBar from "../components/forms/ProgessBar";
import Signup from "../components/forms/Signup";

const SignUp = () => {
  return (
    <main className="flex ">
      <SideBar />
      <section className="flex flex-col items-center justify-center flex-1 ">
        <ProgessBar title="Register as a Writer/Reader" page="signup" />
        {/* <form action="" className="flex flex-col gap-6">
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
        </form> */}
        <Signup />
      </section>
    </main>
  );
};

export default SignUp;
