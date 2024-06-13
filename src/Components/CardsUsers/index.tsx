import classNames from "classnames";
import { Tooltip } from "react-tooltip";

interface CardUsersProps {
  name: string;
  description: string;
  image: string;
  width?: string;
  status: string;
  gender: string;
  className?: string;
  buttonChildren?: React.ReactNode;
}

const CardUsers = ({
  name,
  description,
  image,
  width = "w-full",
  className,
  status,
  gender,
  buttonChildren,
}: CardUsersProps) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-lg shadow-md p-6 flex flex-col items-center",
        className,
        width
      )}
    >
      <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {name}

        <span className="ml-2" id={`genderTooltip-${gender}`}>
          {gender === "female" ? (
            <i className="fa-duotone fa-venus text-pink-500"></i>
          ) : (
            <i className="fa-duotone fa-mars text-blue-500"></i>
          )}
        </span>
        <Tooltip
          anchorSelect={`#genderTooltip-${gender}`}
          content={gender}
          place="top"
          className="bg-gray-800 capitalize"
        />
      </h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div
        className={classNames(
          "px-6 py-1 rounded-full capitalize mb-4",
          status === "active"
            ? "text-green-600 bg-green-100"
            : "text-red-600 bg-red-100"
        )}
      >
        {status}
        <span className="ml-2">
          {status === "active" ? (
            // pulse animation
            <i className="fa-duotone fa-check-circle text-green-600 animate-pulse"></i>
          ) : (
            <i className="fa-duotone fa-times-circle text-red-600"></i>
          )}
        </span>
      </div>
      {buttonChildren}
    </div>
  );
};

export default CardUsers;
