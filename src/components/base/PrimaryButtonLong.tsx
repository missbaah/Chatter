type ButtonLongProps = {
  value: string;
  handleClick: (event: React.MouseEvent) => void;
  type?: string;
};

const PrimaryButtonLong = (props: ButtonLongProps) => {
  const { type = "button" } = props;

  return (
    <input
      type={type}
      value={props.value}
      onClick={props.handleClick}
      className={`text-white text-lg bg-blue-500 py-2 px-4 w-[520px] h-[56px] rounded-lg`}
    />
  );
};

export default PrimaryButtonLong;
