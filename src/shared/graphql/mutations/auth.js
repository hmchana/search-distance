import gql from "graphql-tag";

export const REGISTER = gql`
  mutation register($data: UserWhereInput) {
    register(data: $data) {
      accessToken
    }
  }
`;

export const LOGIN = gql`
  mutation login($data: UserWhereInput) {
    login(data: $data) {
      accessToken
    }
  }
`;

const PROFILE = gql`
  mutation profile {
    profile {
      id
      name
      email
      role
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  REGISTER,
  LOGIN,
  PROFILE
};
