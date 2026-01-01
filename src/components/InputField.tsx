interface InputFieldProps {
  type: "text" | "phone" | "email" | "password" | "textarea" | "number";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
}

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  className,
}: InputFieldProps) => {
  return (
    <>
      {(type === "text" ||
        type === "phone" ||
        type === "email" ||
        type === "number") && (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full py-[22px] px-[31px] shadow-sm 
            text-[15px] font-exo-medium text-gray-graysecondary
            focus:outline-none focus:ring-0
            rounded-[30px] ${className}`}
        />
      )}
      {type === "textarea" && (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          cols={30}
          value={value}
          className={`w-full py-[22px] px-[31px] shadow-sm 
            text-[15px] font-exo-medium text-gray-graysecondary
            focus:outline-none focus:ring-0
            rounded-[30px] ${className}`}
        />
      )}
    </>
  );
};

export default InputField;
