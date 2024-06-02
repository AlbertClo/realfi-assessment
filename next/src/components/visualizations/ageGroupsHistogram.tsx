import { USERS } from "@/dataConnections/hasura/queries/users";
import { useQuery } from "@apollo/client";
import { differenceInYears } from "date-fns";
import React from "react";
import { Chart } from "react-google-charts";


export const AgeGroupsHistogram = (props: { gender: string }) => {
  const {data, loading, error} = useQuery(USERS, {
    variables: {gender: props.gender},
  });
  type User = [string, number];
  let users: User[] = [];
  if (!loading && !error) {
    users = data.users_query.map((user: any): User | void => {
      return [`${user.name} ${user.surname}`, differenceInYears(new Date(), user.date_of_birth)];
    });
  }

  return (
    <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
      <h2 className="text-l font-bold tracking-tight text-slate-800">Age Groups Histogram</h2>
      <div className="flex flex-row gap-6">
        <Chart
          chartType="Histogram"
          data={[["Name", "Age"], ...users]}
          width="100%"
          height="300px"
          options={{
            colors: ["#581c87"],
            dataOpacity: 0.5,
            legend: {position: "none"}
          }}
        />
      </div>
    </div>
  );
};
