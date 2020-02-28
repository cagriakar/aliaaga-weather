import React from "react";

function Header() {
  const year = new Date().getFullYear();
  return (
    <div className="Header">
      <h2>Aliağa Saatlik Hava Durumu</h2>
    </div>
  );
}

export default Header;
