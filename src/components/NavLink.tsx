type NavLinkProps = {
  title: string;
  href: string;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <a href={props.href} className="font-bold text-base text-[#000000]">
      {props.title}
    </a>
  );
};

export default NavLink;
