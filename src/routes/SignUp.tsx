import Logo from "../components/base/Logo";
import PrimaryButton from "../components/base/PrimaryButton";
import Input from "../components/forms/Input";

const SignUp = () => {
  return (
    <main className="flex ">
      <section className="bg-black/50 h-[1024px] w-[622px] flex flex-col justify-center px-9">
        <div className="w-[550px] flex flex-col gap-6">
          <Logo />
          <p className="text-white text-2xl ">
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-1 ">
        <div className="w-[520px]">
          <h3 className="heading3">Register as a Writer/Reader</h3>
          <form action="" className="flex flex-col gap-6">
            <div className="flex gap-3 ">
              <Input label="First name" type="text" />
              <Input label="Last name" type="text" />
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
            <PrimaryButton value="Create account" handleClick={() => {}} />
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
