import gql from "graphql-tag";

export const USERS = gql`
    query GetUsers {
        users {
            id
            name
            surname
            country
            number
            gender
            date_of_birth
            dependants
        }
    }
`;