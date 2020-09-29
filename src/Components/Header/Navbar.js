import React from "react";

const Navbar = ({ page, setPage, setTyping }) => {
  return (
    <div id="navbar">
      <ul>
        {page.pages.map((nav, index) => {
          return (
            !nav.state && (
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
                  setTyping((prevState) => ({
                    type: prevState.type.map((line) =>
                      line.id === 0
                        ? { ...line, state: true }
                        : { ...line, state: false }
                    ),
                  }));
                }}
              >
                {nav.text}
                {nav.state ? (
                  ""
                ) : (
                  <span className="Typewriter__cursor2">|</span>
                )}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
