import React from "react";

const Forbidden = () => {
  return (
    <div>
      <h1>
        You are trying to access restricted campaign data. The FBI have been
        dispatched.
      </h1>
      We will call them off if you log in now:
      <button>Login</button>
    </div>
  );
};

export default Forbidden;
