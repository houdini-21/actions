import classNames from "classnames";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: string;
  color?: string;
  iconPosition?: "left" | "right";
  className?: string;
  ghostButton?: boolean;
  disabled?: boolean;
  isLoader?: boolean;
  path?: string;
  width?: string;
  type?: "button" | "submit" | "reset";
  id?: string;
}

const Button = ({
  text,
  onClick,
  color = "primary",
  icon,
  ghostButton,
  iconPosition = "left",
  className,
  disabled,
  path,
  isLoader,
  type,
  id,
}: ButtonProps) => {
  return path ? (
    <Link
      className={classNames(
        "px-8 py-2 rounded font-medium text-center",
        !ghostButton && "hover:shadow-lg transition-all duration-300",
        className,
        color === "primary" && "bg-primary text-white",
        color,
        isLoader && "cursor-loading pointer-events-none",
        disabled && "opacity-50 cursor-not-allowed",
        ghostButton && "border-2 rounded hover:duration-300"
      )}
      type={type}
      id={id}
      to={path}
    >
      {isLoader ? (
        <i className="fa-duotone fa-spinner-third animate-spin text-xl"></i>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <i className={classNames(icon, "mr-2 text-xl")}></i>
          )}
          {text}
          {icon && iconPosition === "right" && (
            <i className={classNames(icon, "ml-2 text-xl")}></i>
          )}
        </>
      )}
    </Link>
  ) : (
    <button
      className={classNames(
        "px-8 py-2 rounded font-medium",
        !ghostButton && "hover:shadow-lg transition-all duration-300",
        className,
        color === "primary" && "bg-primary text-white",
        color,
        isLoader && "cursor-loading pointer-events-none",
        disabled && "opacity-50 cursor-not-allowed",
        ghostButton && "border-2 rounded hover:duration-300"
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
      id={id}
    >
      {isLoader ? (
        <i className="fa-duotone fa-spinner-third animate-spin text-xl"></i>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <i className={classNames(icon, "mr-2 text-xl")}></i>
          )}
          {text}
          {icon && iconPosition === "right" && (
            <i className={classNames(icon, "ml-2 text-xl")}></i>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
