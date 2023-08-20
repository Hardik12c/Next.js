"use client";

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("Logout");
  };
  return (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  );
};
