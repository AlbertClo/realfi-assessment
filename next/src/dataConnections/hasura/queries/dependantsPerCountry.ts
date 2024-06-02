import gql from "graphql-tag";

export const DEPENDANTS_PER_COUNTRY = gql`
    query DependantsPerCountryQuery($gender: String) {
        dependants_per_country_query(args: {gender: $gender}) {
            country
            sum_of_dependants
        }
    }
`;