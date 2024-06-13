import classNames from "classnames";

interface CardProps {
  type: "simple" | "withImageAndDescription" | "custom";
  title: string;
  description: string;
  image?: string;
  imagePosition?: "top" | "left" | "right";
  className?: string;
  fatherSize?: boolean;
  buttonChildren?: React.ReactNode;
  shadow?: boolean;
  customHeight?: string;
}

const Cards = ({
  type,
  title,
  description,
  image,
  imagePosition = "top",
  className,
  fatherSize = true,
  buttonChildren,
  shadow = true,
  customHeight,
}: CardProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col border rounded-md",
        className,
        !fatherSize && type === "simple" && "w-96",
        !fatherSize && type === "withImageAndDescription" && "w-96",
        !fatherSize && type === "custom" && "w-96",
        shadow && "shadow-md",
        customHeight
      )}
    >
      {type === "simple" && (
        <>
          <div className="flex flex-col px-6 py-4 justify-center">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p>{description}</p>
            {buttonChildren}
          </div>
        </>
      )}
      {type === "withImageAndDescription" && (
        <div
          className={classNames(
            "flex",
            imagePosition === "top" && "flex-col",
            imagePosition === "left" && "flex-row",
            imagePosition === "right" && "flex-row-reverse"
          )}
        >
          <div
            className={classNames(
              imagePosition === "top" && "w-full h-60",
              imagePosition === "left" && "w-5/12 h-60",
              imagePosition === "right" && "w-5/12 h-60"
            )}
          >
            <img
              src={image}
              alt={title}
              className={classNames(
                "w-full h-full object-cover",
                imagePosition === "top" && "rounded-t-md",
                imagePosition === "left" && "rounded-l-md",
                imagePosition === "right" && "rounded-r-md"
              )}
            />
          </div>
          <div
            className={classNames(
              "flex flex-col p-6 justify-center",
              imagePosition === "top" && "w-full",
              imagePosition === "left" && "w-7/12",
              imagePosition === "right" && "w-7/12"
            )}
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p>{description}</p>
            {buttonChildren}
          </div>
        </div>
      )}
      {type === "custom" && <div className="flex flex-col">{description}</div>}
    </div>
  );
};

export default Cards;
