import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// sito components
import SitoContainer from "sito-container";

// context
import { useMode } from "../../context/ModeProvider";
import { useUser } from "../../context/UserProvider";
import { useLanguage } from "../../context/LanguageProvider";

const Fortress = () => {
  const { modeState } = useMode();
  const { userState } = useUser();
  const { languageState } = useLanguage();

  return (
    <SitoContainer
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      sx={{ padding: "10px" }}
    >
      <SitoContainer
        alignItems="center"
        justifyContent="center"
        sx={{ flexWrap: "wrap", gap: "30px" }}
      >
        {languageState.texts.Sidebar.Links.filter((item, i) => i > 0).map(
          (item) => (
            <Link to={item.Link} className={css({ textDecoration: "none" })}>
              <SitoContainer
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: "150px",
                  height: "60px",
                  background: modeState.palette.background.sidebar,
                }}
              >
                {item.Label}
              </SitoContainer>
            </Link>
          )
        )}
      </SitoContainer>
    </SitoContainer>
  );
};

export default Fortress;
