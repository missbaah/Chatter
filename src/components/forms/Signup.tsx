import { useContext } from "react";

import SecondaryButton from "../base/SecondaryButton";
import Input from "./Input";
import { SignUpContext } from "../../context/SignUpContext";
import PrimaryButtonLong from "../base/PrimaryButtonLong";

const Signup = () => {
  const signupContext = useContext(SignUpContext);
  // console.log(signupContext?.updateSetStepCount());
  return (
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
      <PrimaryButtonLong
        type="submit"
        value="Create account"
        handleClick={(event) => {
          event.preventDefault();
          signupContext?.addSetStepCount();
        }}
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
  );
};

export default Signup;
