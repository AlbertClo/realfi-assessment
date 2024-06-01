"use client";

import createHasuraClient from "@/dataConnections/hasura/client";
import { ApolloProvider } from "@apollo/client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const hasuraClient = createHasuraClient();

const navigation = [
  {name: "Users", href: "/dashboard/users"},
  {name: "Overview", href: "/dashboard/overview"},
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="min-h-full bg-slate-900">
      <ApolloProvider client={hasuraClient}>
        <Disclosure as="nav">
          {({open}) => (
            <>
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="border-b border-gray-700">
                  <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                    <div className="flex items-center">
                      <div className="hidden md:block">
                        <div className="flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.href === pathname
                                  ? "bg-slate-100 text-slate-900"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded px-3 py-2 text-sm font-medium"
                              )}
                              aria-current={item.href === pathname ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <DisclosureButton
                        className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-0.5"/>
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                        )}
                      </DisclosureButton>
                    </div>
                  </div>
                </div>
              </div>
              <DisclosurePanel className="border-b border-gray-700 md:hidden">
                <div className="space-y-1 px-2 py-3 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.href === pathname ? "bg-slate-100 text-slate-900" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.href === pathname ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <div>{children}</div>
      </ApolloProvider>
    </div>
  );
}
