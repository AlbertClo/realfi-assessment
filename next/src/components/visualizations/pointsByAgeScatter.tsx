import { USERS } from "@/dataConnections/hasura/queries/users";
import { useQuery } from "@apollo/client";
import { differenceInYears } from "date-fns";
import React from "react";
import { Chart } from "react-google-charts";

export const PointsByAgeScatter = (props: { gender: string }) => {
  const {data, loading, error} = useQuery(USERS, {
    variables: {gender: props.gender},
  });
  type UserPointsByAge = [number, number];
  let userPointsByAge: UserPointsByAge[] = [];
  if (!loading && !error) {
    userPointsByAge = data.users_query.map((user: any): UserPointsByAge | void => {
      return [differenceInYears(new Date(), user.date_of_birth), user.number];
    });
  }

  console.log(userPointsByAge);

  return (
    <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
      <h2 className="text-l font-bold tracking-tight text-slate-800">Points by Age</h2>
      <div className="flex flex-row gap-6">
        <Chart
          chartType="Scatter"
          data={[["Age", "Points"], ...userPointsByAge]}
          width="100%"
          height="300px"
          options={{
            animation: {
              duration: 300,
              easing: "inAndOut"
            },
            colors: ["#dc2626"],
            dataOpacity: 0.5,
            xAxi: {format: "none"},
            legend: {
              position: "none",
            },
          }}
        />
      </div>
    </div>
  );
};
