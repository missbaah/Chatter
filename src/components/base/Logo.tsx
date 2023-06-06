type LogoProps = {
  fontSize?: string;
  fontWeight?: string;
};

const Logo = (props: LogoProps) => {
  const { fontSize = "5xl" } = props;
  const { fontWeight = "bold" } = props;
  const textSizeClass = `text-${fontSize}`;
  const fontWeightClass = `font-${fontWeight}`;

  return (
    <h1 className={` text-blue-500 ${textSizeClass} ${fontWeightClass}`}>
      CHATTER
    </h1>
  );
};

export default Logo;
