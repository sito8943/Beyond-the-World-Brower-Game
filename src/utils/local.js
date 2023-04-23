import config from "../config";

export const updateUser = (userObj) => {
  localStorage.setItem(config.localUser, JSON.stringify(userObj));
};

export const getUser = () => {
  if (localStorage.getItem(config.localUser) !== null)
    return JSON.parse(localStorage.getItem(config.localUser));
  return {};
};
