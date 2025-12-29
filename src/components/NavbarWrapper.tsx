interface NavbarWrapperProps {
  children: React.ReactNode;
  top?: string;
}

const NavbarWrapper = ({ children, top = "20px" }: NavbarWrapperProps) => {
  return (
    <div className={`absolute top-[${top}] left-0 w-full z-50`}>{children}</div>
  );
};

export default NavbarWrapper;
