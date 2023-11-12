import { user } from "../constants/GeneralData";

export const pageTitle = (title) => {
  return (document.title =
    title + " - Portafolio de " + user.first_name + " " + user.last_name + "");
};
