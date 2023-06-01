type ButtonProps = {
  value: string;
  handleClick: () => void;
};

const PrimaryButton = (props: ButtonProps) => {
  return (
    <input
      type="button"
      value={props.value}
      onClick={props.handleClick}
      className="text-white text-lg bg-blue-500 py-2 px-4 w-[157px] h-[56px] rounded-lg"
    />
  );
};

export default PrimaryButton;
