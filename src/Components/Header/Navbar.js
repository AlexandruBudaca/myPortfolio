import React from "react";

const Navbar = ({ page, setPage }) => {
  return (
    <div id="navbar">
      <ul>
        <li
          onClick={() => {
            setPage((prevState) => ({
              pages: prevState.pages.map((nav) =>
                nav.id === 0
                  ? { ...nav, state: true }
                  : { ...nav, state: false }
              ),
            }));
          }}
        >
          {page.pages[0].state ? "" : "Home"}
        </li>

        {page.pages.map((nav, index) => (
          <li
            key={index}
            onClick={() => {
              setPage((prevState) => ({
                pages: prevState.pages.map((nav) =>
                  nav.id === index
                    ? { ...nav, state: true }
                    : { ...nav, state: false }
                ),
              }));
            }}
          >
            {nav.text}
            {nav.state ? "" : <span className="Typewriter__cursor">|</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
