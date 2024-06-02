"use client";

import { USERS } from "@/dataConnections/hasura/queries/users";
import { useQuery } from "@apollo/client";

export default function Users() {
  const {data, loading, error} = useQuery(USERS, {
    variables: {gender: "All"},
  });

  type User = {
    id: number;
    name: string;
    surname: string;
    number: number;
    gender: "Male" | "Female";
    country: string;
    dependants: number;
    dateOfBirth: Date;
  };

  let users: User[] = [];
  if (!loading && !error) {
    users = data.users_query.map((u: any): User => {
      return {
        id: u.id,
        name: u.name,
        surname: u.surname,
        number: u.number,
        gender: u.gender,
        country: u.country,
        dependants: u.dependants,
        dateOfBirth: new Date(u.date_of_birth),
      };
    });
  }

  return (
    <>
      <div className="">
        <div className="pb-32">
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">Users</h1>
            </div>
          </header>
        </div>
        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <div className="flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                      <tr>
                        <th scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                          Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Surname
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Number
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Gender
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Country
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Dependants
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          BirthDate
                        </th>
                      </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                      {loading && <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          Loading...
                        </td>
                      </tr>}
                      {users.map((user: User) => (
                        <tr key={user.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {user.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.surname}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.number}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.gender}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.country}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.dependants}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{
                            new Intl.DateTimeFormat("en-ZA", {dateStyle: "short"}).format(user.dateOfBirth)
                          }</td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
