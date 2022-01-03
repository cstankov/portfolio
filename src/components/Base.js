import React from "react";
import { useNavigate } from "react-router";

const Base = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login", {
      state: {
        id: 0,
        name: 'cole',
      },
    });
  };

  return (
    <div>
      {/* onClick={() => redirectToLogin("someString")}> click me </button> */}
      <button onClick={redirectToLogin}>Click me</button>
    </div>
  );
};

export default Base;
