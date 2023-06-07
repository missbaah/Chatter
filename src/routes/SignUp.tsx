import { useContext } from "react";
import SideBarForms from "../components/base/SideBarForms";
import ProgessBar from "../components/forms/ProgessBar";
import Signup from "../components/forms/Signup";
import { SignUpContext } from "../context/SignUpContext";
import OTP from "../components/forms/OTP";

const SignUp = () => {
  const signupContext = useContext(SignUpContext);

  console.log(signupContext?.stepCount);
  return (
    <main className="flex ">
      <SideBarForms />
      {signupContext?.stepCount == 0 ? (
        <section className="flex flex-col items-center justify-center flex-1 ">
          <ProgessBar title="Register as a Writer/Reader" page="signup" />
          {<Signup />}
        </section>
      ) : signupContext?.stepCount == 1 ? (
        <OTP />
      ) : undefined}
    </main>
  );
};

export default SignUp;
