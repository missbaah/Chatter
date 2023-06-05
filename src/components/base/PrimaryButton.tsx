type ButtonProps = {
  value: string;
  handleClick: () => void;
  width?: string;
};

const PrimaryButton = (props: ButtonProps) => {
  const { width = "157px" } = props;
  return (
    <input
      type="button"
      value={props.value}
      onClick={props.handleClick}
      className={`text-white text-lg bg-blue-500 py-2 px-4 w-[${width}] h-[56px] rounded-lg`}
    />
  );
};

export default PrimaryButton;
