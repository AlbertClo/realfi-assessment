import gql from "graphql-tag";

export const DEPENDANTS_PER_COUNTRY = gql`
    query DependantsPerCountry($gender: String) {
        dependants_per_country(args: {gender: $gender}) {
            country
            sum_of_dependants
        }
    }
`;