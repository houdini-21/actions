import classNames from "classnames";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  width?: string;
  name?: string;
  disabled?: boolean;
  error?: string;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  id,
  width = "w-full",
  name,
  disabled,
  error,
}: InputProps) => {
  return (
    <div className={classNames("h-16", width)}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames(
          "px-4 py-2 border rounded w-full focus:outline-1 focus:outline-blue-300",
          className,
          error && "border-red-400 focus:outline-red-500 focus:outline",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        id={id}
        name={name}
        disabled={disabled}
      />
      <p className="text-red-500 text-xs mt-1">{error ?? ""}</p>
    </div>
  );
};

export default Input;
