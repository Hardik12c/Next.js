import React from "react";

const login = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" />
          <input type="password" />
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
};

export default login;
