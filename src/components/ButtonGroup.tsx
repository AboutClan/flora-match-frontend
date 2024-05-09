interface ButtonGroupProps {}

function ButtonGroup({}: ButtonGroupProps) {
  const buttons = [
    "사랑",
    "유정",
    "생일",
    "축하",
    "경조사",
    "졸업식",
    "어버이날",
    "스승의날",
    "추모",
  ];
  return (
    <div className="flex flex-wrap   bg-white">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="mb-1.5 mr-1.5 rounded-full  border border-gray-4  px-3 py-1 text-gray-4"
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
