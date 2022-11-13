import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// react-icons
import { FiX } from "react-icons/fi";

// sito container
import SitoContainer from "sito-container";

// context
import { useLanguage } from "../../context/LanguageProvider";

const Sidebar = (props) => {
  const { open, handleClose } = props;

  const { languageState } = useLanguage();

  return (
    <SitoContainer
      flexDirection="column"
      className="sidebar"
      sx={{
        width: "300px",
        padding: "10px 20px",
        minHeight: "100vh",
        "@media (max-width: 900px)": {
          position: "fixed",
          transform: open ? "translateX(0)" : "translateX(-350px)",
        },
      }}
    >
      <SitoContainer
        flexDirection="column"
        alignItems="center"
        sx={{ width: "100%", height: "100%", position: "relative" }}
      >
        <button
          onClick={handleClose}
          className={css({
            padding: "2px 0px 0px 0px",
            background: "#ff5f5f",
            color: "aliceblue",
            border: "none",
            borderRadius: "100%",
            width: "24px",
            height: "24px",
            fontSize: "20px",
            cursor: "pointer",
            transition: "background 500ms ease",
            "&:hover": {
              background: "red",
            },
            top: "15px",
            right: "15px",
            position: "absolute",
            "@media (min-width: 900px)": {
              display: "none",
            },
          })}
        >
          <FiX />
        </button>
        <h1>{languageState.texts.Sidebar.Title}</h1>
        <hr />
        {languageState.texts.Sidebar.Links.map((item) => (
          <Link
            className={css({ marginTop: "10px", textDecoration: "none" })}
            key={item.Label}
            to={item.Link}
          >
            {item.Label}
          </Link>
        ))}
        <hr />
        {languageState.texts.Sidebar.Player.map((item) => (
          <Link
            className={css({ marginTop: "10px", textDecoration: "none" })}
            key={item.Label}
            to={item.Link}
          >
            {item.Label}
          </Link>
        ))}
      </SitoContainer>
    </SitoContainer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Sidebar;
