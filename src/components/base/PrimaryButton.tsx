type ButtonProps = {
  value: string;
  handleClick: () => void;
  width?: string;
  type?: string;
};

const PrimaryButton = (props: ButtonProps) => {
  const { type = "button" } = props;
  const { width = "157px" } = props;
  return (
    <input
      type={type}
      value={props.value}
      onClick={props.handleClick}
      className={`text-white text-lg bg-blue-500 py-2 px-4 w-[${width}] h-[56px] rounded-lg`}
    />
  );
};

export default PrimaryButton;
