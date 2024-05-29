'use client'

import { Chart } from "react-google-charts";
import React from "react";

export default function Users() {
  return (
    <>
      <div className="">
        <div className="pb-32">
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">Overview</h1>
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
