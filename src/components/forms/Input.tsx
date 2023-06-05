type InputProps = {
  label: string;
  type: string;
  width?: string;
};

const Input = (props: InputProps) => {
  const { width = "520px" } = props;
  return (
    <div className={`flex flex-col gap-3 w-[${width}] flex-1`}>
      <label className="sub-text ">{props.label}</label>
      <input
        type={props.type}
        className={`border-solid border-2 p-4 rounded-lg`}
      />
    </div>
  );
};

export default Input;
