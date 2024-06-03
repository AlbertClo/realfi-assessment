import { USERS } from "@/dataConnections/hasura/queries/users";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import Users from "../src/app/dashboard/users/page";

const mocks = [
  {
    request: {
      query: USERS,
      variables: {
        gender: "All"
      }
    },
    result: {
      data: {
        users_query: {
          id: 1,
          name: 'John',
          surname: 'Doe',
          number: 1,
          country: 'Germany',
          gender: 'Male',
          dependants: 2,
          date_of_birth: "1981-10-03",
        }
      }
    }
  }
];

describe("Users", () => {
  it("should have 'Users' text", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    const heading = screen.getByText("Users");

    expect(heading).toBeInTheDocument();
  });

  it("should have 'loading' test", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    const heading = screen.getByText("Loading...");

    expect(heading).toBeInTheDocument();
  });
});