import React, { useState } from "react";

const ClickToEdit = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <div>
        <b>값 : {text} </b>
      </div>
    </div>
  );
};
export default ClickToEdit;
