const Episode = ({ onClick, text }) => {
  const renderButton = () => (
    <button className="border-2 border-opacity-100 hover: border-n-11 hover:border-gray-200 px-2 py-2 w-48 text-neutral-300 " onClick={onClick}>
      {text}
    </button>
  );
  return renderButton();
};

export default Episode;
