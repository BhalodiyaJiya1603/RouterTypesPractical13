import { useState } from "react";
import HashRouter from "./Components/HashRouter";
import MemoryRouter from "./Components/MemoryRouter";
import StaticRouter from "./Components/StaticRouter";

export default function App() {
  const [selected, setSelected] = useState("hash");

  const tabs = [
    {
      id: "hash",
      label: "HashRouter",
      number: "01",
      color: "blue",
    },
    {
      id: "memory",
      label: "MemoryRouter",
      number: "02",
      color: "violet",
    },
    {
      id: "static",
      label: "StaticRouter",
      number: "03",
      color: "emerald",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            React Router Learning Lab
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Explore React Routers
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Discover three routing approaches through interactive
            examples built with React and Tailwind CSS.
          </p>
        </header>

        <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {tabs.map((tab) => {
              const active = selected === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setSelected(tab.id)}
                  aria-pressed={active}
                  className={`group rounded-2xl border p-4 text-left transition duration-200 ${
                    active
                      ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                      : "border-transparent bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold tracking-widest ${
                        active ? "text-slate-300" : "text-slate-400"
                      }`}
                    >
                      {tab.number}
                    </span>

                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-xl text-sm transition ${
                        active
                          ? "bg-white/15 text-white"
                          : "bg-white text-slate-500 group-hover:text-slate-900"
                      }`}
                    >
                      →
                    </span>
                  </div>

                  <h2 className="mt-4 font-bold">{tab.label}</h2>

                  <p
                    className={`mt-1 text-xs ${
                      active ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {tab.id === "hash" && "URL hash navigation"}
                    {tab.id === "memory" && "In-memory navigation"}
                    {tab.id === "static" && "Server-side routing"}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <section aria-live="polite">
          {selected === "hash" && <HashRouter />}
          {selected === "memory" && <MemoryRouter />}
          {selected === "static" && <StaticRouter />}
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-center">
          <p className="text-sm font-medium text-slate-600">
            Built with React + React Router + Tailwind CSS
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Interactive routing examples for learning and practice.
          </p>
        </footer>
      </div>
    </main>
  );
}