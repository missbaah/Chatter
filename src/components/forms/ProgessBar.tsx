import { useEffect } from "react";

type ProgessBarProps = {
  page: "signup" | "login";
  title: string;
};

const ProgessBar = (props: ProgessBarProps) => {
  const bar1 = document.getElementById("bar1");
  console.log(bar1);
  const bar2 = document.getElementById("bar2");
  console.log(bar2);
  useEffect(() => {
    if (props.page == "signup") {
      bar1?.classList.add("bg-blue-500");
      bar2?.classList.add("bg-[#D9D9D9]");
    } else if (props.page == "login") {
      bar1?.classList.add("bg-[#D9D9D9]");
      bar2?.classList.add("bg-blue-500");
    } else {
      bar1?.classList.add("bg-[#D9D9D9]");
      bar2?.classList.add("bg-[#D9D9D9]");
    }
  }, [props.page]);

  return (
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
          <div id="bar1" className="w-[220px] h-[6px]"></div>
          <div id="bar2" className="w-[220px] h-[6px]"></div>
        </section>
        <h3 className="heading3 text-center mb-6">{props.title}</h3>
      </div>
    </div>
  );
};

export default ProgessBar;
