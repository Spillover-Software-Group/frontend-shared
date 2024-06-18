function Option({ option, type, onClick }) {
  const handleClick = () => {
    if (onClick) onClick(option, type);
  };

  return (
    <div
      className={`p-3 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200 transition duration-200 text-sm ${onClick && "cursor-pointer"} whitespace-pre-line`}
      onClick={handleClick}
    >
      {option}
    </div>
  );
}

export default Option;
