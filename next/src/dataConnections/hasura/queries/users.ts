import gql from "graphql-tag";

export const USERS = gql`
    query UsersQuery($gender: String) {
        users_query(args: {gender: $gender}) {
            id
            name
            surname
            number
            country
            gender
            dependants
            date_of_birth
        }
    }
`;