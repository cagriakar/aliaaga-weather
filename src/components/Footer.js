import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <footer>
        <p>RCA, Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
