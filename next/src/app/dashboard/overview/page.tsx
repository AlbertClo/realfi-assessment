"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AgeGroupsHistogram } from "@/components/visualizations/ageGroupsHistogram";
import { DependantsPerCountry } from "@/components/visualizations/dependantsPerCountry";
import { PointsByAgeScatter } from "@/components/visualizations/pointsByAgeScatter";
import React, { useState } from "react";

export default function Overview() {
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
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 grid lg:grid-cols-2 grid-cols-1 gap-6">
            <DependantsPerCountry className="lg:col-span-2" gender={selectedGender}/>
            <AgeGroupsHistogram gender={selectedGender}/>
            <PointsByAgeScatter gender={selectedGender}/>
          </div>
        </main>
      </div>
    </>
  );
}
