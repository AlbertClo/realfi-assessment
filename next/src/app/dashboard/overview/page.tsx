"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEPENDANTS_PER_COUNTRY } from "@/dataConnections/hasura/queries/dependantsPerCountry";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

export default function Users() {
  const [selectedGender, setSelectedGender] = useState<string>("All");

  const {data, loading, error} = useQuery(DEPENDANTS_PER_COUNTRY, {
    variables: {gender: selectedGender},
  });
  type DependentsByCountryItem = [string, number];
  let dependentsPerCountry: DependentsByCountryItem[] = [["", 0]];
  if (!loading && !error) {
    dependentsPerCountry = data.dependants_per_country.map((item: any): DependentsByCountryItem => {
      return [item.country, item.sum_of_dependants];
    });
  }

  return (
    <>
      <div className="">
        <div className="pb-32">
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-row">
              <h1 className="text-3xl font-bold tracking-tight text-white flex-grow">Overview</h1>
              <div className="text-white">
                <Select value={selectedGender} onValueChange={setSelectedGender}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Gender"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Genders</SelectItem>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </header>
        </div>
        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 flex flex-col gap-6">
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
            {/*<div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">*/}
            {/*  <h2 className="text-l font-bold tracking-tight text-slate-800">Age Group Histogram</h2>*/}
            {/*</div>*/}
          </div>
        </main>
      </div>
    </>
  )
    ;
}
