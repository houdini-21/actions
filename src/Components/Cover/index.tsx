import classNames from "classnames";

interface CoverProps {
	title: string;
	description: string;
	image: string;
	className?: string;
  width?: string;
	buttonChildren?: React.ReactNode;
}

// this component is a cover with a title, description, image background and a button

const Cover = ({
	title,
	description,
	image,
	className,
  width = "w-full",
	buttonChildren,
}: CoverProps) => {
	return (
		<div
			className={classNames(
				"flex flex-col justify-center items-center h-96 bg-cover bg-center",
				className,
        width
			)}
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="flex flex-col justify-center items-center bg-black bg-opacity-50 w-full h-full">
				<h1 className="text-white text-4xl font-semibold">{title}</h1>
				<p className="text-white text-lg">{description}</p>
				{buttonChildren}
			</div>
		</div>
	);
};

export default Cover;
