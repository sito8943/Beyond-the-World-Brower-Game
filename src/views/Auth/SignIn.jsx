import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// sito-components
import SitoContainer from "sito-container";

// @emotion/css
import { css } from "@emotion/css";

// contexts
import { useLanguage } from "../../context/LanguageProvider";
import { useNotification } from "../../context/NotificationProvider";

// services
import { login } from "../../services/post";

const SignIn = () => {
  const navigate = useNavigate();
  const { languageState } = useLanguage();
  const { setNotificationState } = useNotification();

  const showNotification = (ntype, message) =>
    setNotificationState({ type: "set", ntype, message });

  const { register, handleSubmit } = useForm();

  const onSubmit = async (d) => {
    const { user, password } = d;
    try {
      const response = await login(user, password);
      console.log(response);
      const { id, token, expiration } = response.data;
    } catch (error) {
      console.log(error);
      showNotification("error", String(error));
    }
  };

  return (
    <SitoContainer
      flexDirection="column"
      sx={{ width: "100%", height: "100%" }}
    >
      <SitoContainer
        sx={{
          width: "100%",
          justifyContent: "flex-start",
          marginTop: "10px",
        }}
      >
        <SitoContainer
          sx={{
            minWidth: "48px",
            minHeight: "48px",
            borderRadius: "100%",
            background: "red",
            marginRight: "10px",
            marginLeft: "20px",
          }}
        ></SitoContainer>
      </SitoContainer>
      <SitoContainer
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <SitoContainer
            flexDirection="column"
            sx={{
              width: "512px",
              height: "256px",
              marginRight: "10px",
              marginLeft: "20px",
              border: "2px solid #000000",
              padding: "50px",
            }}
          >
            <h1 className={css({ margin: 0 })}>
              {languageState.texts.SignIn.Title}
            </h1>
            {languageState.texts.SignIn.Inputs.map((item) => (
              <SitoContainer key={item.id} flexDirection="column">
                <label className={css({ margin: "25px 0px 5px 0px" })}>
                  {item.label}
                </label>
                <input
                  required
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  className={css({ padding: "5px" })}
                  {...register(item.id)}
                />
              </SitoContainer>
            ))}
            <SitoContainer justifyContent="flex-end" sx={{ marginTop: "10px" }}>
              <Link to={"/auth/recovery"} target="_blank" rel="noreferrer">
                {languageState.texts.SignIn.LinkRecover}
              </Link>
            </SitoContainer>
            <SitoContainer
              justifyContent="flex-end"
              sx={{ marginTop: "10px", gap: "15px" }}
            >
              {languageState.texts.SignIn.Buttons.map((item) => (
                <button
                  key={item.text}
                  type={item.type}
                  onClick={() =>
                    item.type === "button" ? navigate("/auth/sign-up") : {}
                  }
                >
                  {item.text}
                </button>
              ))}
            </SitoContainer>
          </SitoContainer>
        </form>
      </SitoContainer>
    </SitoContainer>
  );
};

export default SignIn;
