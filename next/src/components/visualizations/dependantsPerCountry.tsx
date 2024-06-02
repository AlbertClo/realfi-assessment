import { DEPENDANTS_PER_COUNTRY } from "@/dataConnections/hasura/queries/dependantsPerCountry";
import { useQuery } from "@apollo/client";
import React from "react";
import { Chart } from "react-google-charts";

export const DependantsPerCountry = (props: {gender: string}) => {
  const {data, loading, error} = useQuery(DEPENDANTS_PER_COUNTRY, {
    variables: {gender: props.gender},
  });
  type DependentsByCountryItem = [string, number];
  let dependentsPerCountry: DependentsByCountryItem[] = [["", 0]];
  if (!loading && !error) {
    dependentsPerCountry = data.dependants_per_country.map((item: any): DependentsByCountryItem => {
      return [item.country, item.sum_of_dependants];
    });
  }

  return (
      <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <h2 className="text-l font-bold tracking-tight text-slate-800">Dependents per Country</h2>
        <div className="flex flex-row gap-6">
          <Chart
            className=""
            chartType="BarChart"
            data={[["Country", "Dependents"], ...dependentsPerCountry]}
            width="100%"
            height="300px"
            options={{
              animation: {
                duration: 300,
                easing: "inAndOut"
              },
              colors: ["#0891b2"],
              xAxi: {format: "none"},
              legend: {
                position: "none",
              },
            }}
          />
          <Chart
            chartType="GeoChart"
            data={[["Country", "Dependents"], ...dependentsPerCountry]}
            width="100%"
            height="300px"
            options={{colorAxis: {colors: ["#a5f3fc", "#075985"]}}}
          />
        </div>
      </div>
  );
}
