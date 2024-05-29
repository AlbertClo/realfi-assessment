'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Chart } from "react-google-charts";
import React, { useState } from "react";

export default function Users() {
  const [selectedGender, setSelectedGender] = useState<string>("all");

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
                  <SelectContent >
                    <SelectItem value="all">All Genders</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </header>
        </div>
        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <Chart
                chartType="ScatterChart"
                data={[["Age", "Height"], [4, 5.5], [6, 6], [8, 9.5], [10, 11.5], [11, 11]]}
                width="100%"
                height="400px"
                legendToggle
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
