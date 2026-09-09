import { a11yClickProps } from "@/utils";

function Option({ option, type, onClick }) {
  const handleClick = () => {
    if (onClick) onClick(option, type);
  };

  return (
    <div
      className={`rounded-md bg-gray-100 p-3 text-gray-600 text-sm transition duration-200 hover:bg-gray-200 ${onClick && "cursor-pointer"} whitespace-pre-line`}
      {...a11yClickProps(handleClick)}
    >
      {option}
    </div>
  );
}

export default Option;
