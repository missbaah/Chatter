type ButtonProps = {
  value: string;
  handleClick: () => void;
  borderColor?: string;
  width?: string;
};

const SecondaryButton = (props: ButtonProps) => {
  const { borderColor = "blue-500" } = props;
  const { width = "157px" } = props;
  return (
    <input
      type="button"
      value={props.value}
      onClick={props.handleClick}
      className={`text-black-700 text-lg border-solid border-2 border-[${borderColor}] py-2 px-4 w-[${width}] h-[56px] rounded-lg`}
    />
  );
};

export default SecondaryButton;
