type LogoProps = {
  fontSize?: string;
  fontWeight?: string;
};

const Logo = (props: LogoProps) => {
  const { fontSize = "5xl" } = props;
  const { fontWeight = "bold" } = props;

  return (
    <h1 className={`text-blue-500 text-${fontSize} font-${fontWeight}`}>
      CHATTER
    </h1>
  );
};

export default Logo;
