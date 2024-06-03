import Overview from "@/app/dashboard/overview/page";
import { DEPENDANTS_PER_COUNTRY } from "@/dataConnections/hasura/queries/dependantsPerCountry";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";

const mocks = [
  {
    request: {
      query: DEPENDANTS_PER_COUNTRY,
      variables: {
        gender: "All"
      }
    },
    result: {
      data: {
        dependants_per_country_query: [
          {
            country: "Latvia",
            sum_of_dependants: 9
          },
          {
            country: "Germany",
            sum_of_dependants: 2
          }
        ]
      }
    }
  }
];

describe("Users", () => {
  it("should have show section headings text", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Overview/>
      </MockedProvider>
    );

    const dependentsPerCountry = screen.getByText("Dependents per Country");
    const ageGroupsHistogram = screen.getByText("Age Groups Histogram");
    const pointsByAge = screen.getByText("Points by Age");

    expect(dependentsPerCountry).toBeInTheDocument();
    expect(ageGroupsHistogram).toBeInTheDocument();
    expect(pointsByAge).toBeInTheDocument();
  });
});