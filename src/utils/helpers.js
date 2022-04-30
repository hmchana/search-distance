import isEmpty from "lodash/isEmpty";

export const isAuthenticated = authorization => {
  const { accessToken, user } = authorization;
  return !!accessToken && !isEmpty(user);
};
