type InputProps = {
  label: string;
  type: string;
};

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="sub-text">{props.label}</label>
      <input
        type={props.type}
        className={`border-solid border-2 p-4 rounded-lg`}
      />
    </div>
  );
};

export default Input;
