import React, { useState } from "react";

const RadioButton = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const radioButtons = props.props?.map((value, index) => {
    // <div key={index}>
    //   <input type="radio" id={option${index}} name="options" value={value} />
    //   <label htmlFor={option${index}}>{value}</label>
    // </div>
    const stringWithoutHash = value.replace(/#/g, '');

   return( 
  <>
   <label className="inline-flex items-center">


      <input
        type="radio"
        className="form-radio h-5 w-5 text-indigo-600"
        value={stringWithoutHash}
        id={stringWithoutHash}
        checked={selectedOption===stringWithoutHash}
        onChange={handleOptionChange}
        />
      <span className="ml-2">{stringWithoutHash}</span>
    </label>
    <br/>
    </>
      
   )
});


  return (
    <div>
      {radioButtons}
     
    </div>
  );
};

export default RadioButton