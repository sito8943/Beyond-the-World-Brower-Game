import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// sito components
import SitoImage from "sito-image";
import SitoContainer from "sito-container";

// context
import { useMode } from "../../context/ModeProvider";
import { useUser } from "../../context/UserProvider";
import { useLanguage } from "../../context/LanguageProvider";

// images
import background from "../../assets/images/background/plain.jpeg";

const Fortress = () => {
  const { modeState } = useMode();
  const { userState } = useUser();
  const { languageState } = useLanguage();

  return (
    <SitoContainer
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="column"
      sx={{ padding: "10px", flex: 1 }}
    >
      <SitoContainer sx={{ height: "500px" }}>
        <SitoImage
          src={background}
          alt="fortress"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SitoContainer>
      <SitoContainer
        alignItems="center"
        justifyContent="center"
        sx={{ flexWrap: "wrap", gap: "30px", width: "100%" }}
      >
        {languageState.texts.Sidebar.Links.filter((item, i) => i > 0).map(
          (item) => (
            <Link to={item.Link} className={css({ textDecoration: "none" })}>
              <button
                className={`secondary ${css({
                  width: "150px",
                  height: "60px",
                })}`}
                alignItems="center"
                justifyContent="center"
              >
                {item.Label}
              </button>
            </Link>
          )
        )}
      </SitoContainer>
    </SitoContainer>
  );
};

export default Fortress;
