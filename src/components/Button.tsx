interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, className, type }: ButtonProps) => {
  return (
    <button
      className={`bg-orange px-8 py-4 font-exo-bold uppercase rounded-[4px] ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
