type ButtonProps = {
  value: string;
  handleClick: () => void;
};

const SecondaryButton = (props: ButtonProps) => {
  return (
    <input
      type="button"
      value={props.value}
      onClick={props.handleClick}
      className="text-black-700 text-lg border-solid border-2 border-blue-500 py-2 px-4 w-[157px] h-[56px] rounded-lg"
    />
  );
};

export default SecondaryButton;
