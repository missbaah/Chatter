import PrimaryButtonLong from "../base/PrimaryButtonLong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SignUpContext } from "../../context/SignUpContext";
import OTPInput from "react-otp-input";

const OTP = () => {
  const signupContext = useContext(SignUpContext);
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-7 ">
      <button
        className="fixed top-[26px] left-[646px]"
        onClick={() => {
          signupContext?.substractStepCount();
        }}
      >
        <FontAwesomeIcon icon={faCircleChevronLeft} /> Back
      </button>
      <section className="flex flex-col gap-3">
        <h3 className="heading3 text-center ">Enter confirmation code</h3>
        <p className="text-[#626262]">
          We emailed you a code. Please input the code here for account
          verification
        </p>
      </section>
      <OTPInput
        numInputs={4}
        renderInput={(props) => <input {...props} />}
        onChange={() => {}}
        value=""
        containerStyle="w-[496.49px] flex justify-between mt-[49px]"
        inputStyle={{
          width: "106px",
          height: "80px",
          border: "1px solid #CED4DD",
          borderRadius: "8px",
        }}
        // inputStyle="w-[106px] h-[80px] border border-solid border-[#CED4DD] rounded-[8px]"
      />
      <PrimaryButtonLong
        type="submit"
        value="Create Account"
        handleClick={() => {}}
      />
    </div>
  );
};

export default OTP;
