import React, { useState } from "react";

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-5 w-5 text-indigo-600"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <span className="ml-2">Option 1</span>
      </label>
      <label className="inline-flex items-center ml-10">
        <input
          type="radio"
          className="form-radio h-5 w-5 text-indigo-600"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <span className="ml-2">Option 2</span>
      </label>
      <label className="inline-flex items-center ml-10">
        <input
          type="radio"
          className="form-radio h-5 w-5 text-indigo-600"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        <span className="ml-2">Option 3</span>
      </label>
      <label className="inline-flex items-center ml-10">
        <input
          type="radio"
          className="form-radio h-5 w-5 text-indigo-600"
          value="option4"
          checked={selectedOption === "option4"}
          onChange={handleOptionChange}
        />
        <span className="ml-2">Option 4</span>
      </label>
    </div>
  );
};

export default RadioButton;
