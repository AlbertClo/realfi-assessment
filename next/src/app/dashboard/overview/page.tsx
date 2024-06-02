"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DependantsPerCountry } from "@/components/visualizations/dependantsPerCountry";
import React, { useState } from "react";

export default function Users() {
  const [selectedGender, setSelectedGender] = useState<string>("All");

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
            <DependantsPerCountry gender={selectedGender}/>
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <h2 className="text-l font-bold tracking-tight text-slate-800">Age Group Histogram</h2>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
