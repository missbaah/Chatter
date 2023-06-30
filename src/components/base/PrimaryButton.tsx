type ButtonProps = {
  value: string;
  handleClick: (event: React.MouseEvent) => void;
  type?: string;
  id?: string;
};

const PrimaryButton = (props: ButtonProps) => {
  const { type = "button" } = props;

  return (
    <input
      id={props.id}
      type={type}
      value={props.value}
      onClick={props.handleClick}
      className={`text-white text-lg bg-blue-500 py-2 px-4 w-[157px] h-[56px] rounded-lg`}
    />
  );
};

export default PrimaryButton;
