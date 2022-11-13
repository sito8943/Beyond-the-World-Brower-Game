import { useForm } from "react-hook-form";
import { useState } from "react";

// sito-components
import SitoContainer from "sito-container";

// @emotion/css
import { css } from "@emotion/css";

//own components
import Loading from "../../components/Loading/Section";

// contexts
import { useLanguage } from "../../context/LanguageProvider";
import { useNotification } from "../../context/NotificationProvider";

// services
import { register as rRegister } from "../../services/post";
import { passwordValidation } from "../../utils/functions";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { languageState } = useLanguage();
  const { setNotificationState } = useNotification();

  const showNotification = (ntype, message) =>
    setNotificationState({ type: "set", ntype, message });

  const { register, handleSubmit } = useForm();

  const onSubmit = async (d) => {
    const { user, password, repassword } = d;
    switch (passwordValidation(password, user)) {
      case 0:
        console.log(languageState.texts.Errors.WrongSize);
        showNotification("error", languageState.texts.Errors.WrongSize);
        return;
      case 1:
        console.log(languageState.texts.Errors.WrongVariability);
        showNotification("error", languageState.texts.Errors.WrongVariability);
        return;
      case 2:
        console.log(languageState.texts.Errors.LikeUser);
        showNotification("error", languageState.texts.Errors.LikeUser);
        return;
    }
    if (password != repassword) {
      console.log(languageState.texts.Errors.DifferentPassword);
      showNotification("error", languageState.texts.Errors.DifferentPassword);
    } else {
      setLoading(true);
      try {
        const response = await rRegister(user, password);
        const { id, token, expiration } = response.data;
      } catch (error) {
        console.log(error);
        showNotification("error", String(error));
      }
      setLoading(false);
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
        <Loading visible={loading} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <SitoContainer
            flexDirection="column"
            sx={{
              width: "512px",
              height: "320px",
              marginRight: "10px",
              marginLeft: "20px",
              border: "2px solid #000000",
              padding: "50px",
            }}
          >
            <h1 className={css({ margin: 0 })}>
              {languageState.texts.SignUp.Title}
            </h1>
            {languageState.texts.SignUp.Inputs.map((item) => (
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
            <SitoContainer
              justifyContent="flex-end"
              sx={{ marginTop: "10px", gap: "15px" }}
            >
              {languageState.texts.SignUp.Buttons.map((item) => (
                <button key={item.text} type={item.type}>
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

export default SignUp;
