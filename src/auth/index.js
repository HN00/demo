import { ACCESS_TOKEN } from "../constants/localStorageKeys";

import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

export const logout = () => {
  window.localStorage.removeItem(ACCESS_TOKEN);
  window.history.go(0);
};

export const IsAuthenticatedRedir = connectedRouterRedirect({
  ...IsAuthenticatedDefaults,
  redirectPath: "/login"
});

const IsAuthenticatedDefaults = {
  authenticatedSelector: state =>
    window.localStorage.getItem(ACCESS_TOKEN) != null,
  wrapperDisplayName: "UserIsAuthenticated"
};
