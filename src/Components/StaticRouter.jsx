import React from "react";

export default function StaticRouter() {
  const details = [
    { label: "Framework", value: "React" },
    { label: "Routing", value: "StaticRouter" },
    { label: "Rendering", value: "Server-side" },
    { label: "Navigation", value: "Fixed request location" },
  ];

  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 shadow-xl">
      <div className="p-6 text-white sm:p-10">
        <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold tracking-widest">
          ROUTER 03
        </span>

        <h2 className="mt-6 text-3xl font-extrabold">
          StaticRouter
        </h2>

        <p className="mt-3 max-w-xl leading-7 text-emerald-50">
          A router designed for rendering React applications at
          a specified location, commonly on the server.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-5 text-slate-800 shadow-lg sm:p-7">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              ⚙️
            </div>

            <div>
              <h3 className="text-xl font-bold">Router Information</h3>
              <p className="mt-1 text-sm text-slate-500">
                Configuration overview
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm text-slate-500">
                  {item.label}
                </span>
                <span className="font-semibold text-slate-800">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-800">
              Example route: /about
            </p>
            <p className="mt-1 text-sm leading-6 text-emerald-700">
              A server can render the requested route into HTML
              using React Router and React server-rendering APIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}