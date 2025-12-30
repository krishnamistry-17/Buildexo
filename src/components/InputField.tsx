interface InputFieldProps {
  type: "text" | "phone" | "email" | "password" | "select" | "textarea";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
  options?: string[];
}

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  className,
  options = [],
}: InputFieldProps) => {
  return (
    <>
      {(type === "text" || type === "phone" || type === "email") && (
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
      {type === "select" && (
        <select
          name={name}
          id={name}
          className={`w-full py-[22px] px-[31px] shadow-sm 
            text-[15px] font-exo-medium text-gray-graysecondary
            focus:outline-none focus:ring-0
            rounded-[30px] ${className}`}
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="text-[15px] font-exo-medium text-gray-graysecondary bg-white"
            >
              {option}
            </option>
          ))}
        </select>
      )}
      {type === "textarea" && (
        <textarea
          rows={4}
          cols={30}
          placeholder={placeholder}
          className={`text-[15px] font-exo-regular text-gray-graysecondary
            focus:outline-none focus:ring-0
            rounded-[20px]
            pt-[21px] pl-[31px] pb-[100px] w-full ${className}`}
          value={value}
          name={name}
        />
      )}
    </>
  );
};

export default InputField;
