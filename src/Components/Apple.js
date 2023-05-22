import React from "react";
import { useNavigate } from "react-router-dom";

const Apple = () => {
  const Navigate = useNavigate();

  const onHomePageButtonClick = () => {
    Navigate("/");
  };

  return (
    <div>
      <div>Apple Page🍎</div>
      <button onClick={onHomePageButtonClick}>Navigate to Home page</button>
    </div>
  );
};

export default Apple;
