import {
  MemoryRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";

function Page({ title }) {
  const location = useLocation();

  return (
    <div className="rounded-xl bg-white p-5">
      <h3 className="text-xl font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 text-slate-600">
        Current route: {location.pathname}
      </p>
    </div>
  );
}

export default function MemoryRouterDemo() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <div className="rounded-2xl bg-violet-50 p-6">
        <h2 className="mb-5 text-2xl font-bold text-violet-900">
          MemoryRouter Demo
        </h2>

        <nav className="mb-5 flex flex-wrap gap-3">
          <NavLink
            to="/"
            end
            className="rounded-lg bg-violet-600 px-4 py-2 text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="rounded-lg bg-white px-4 py-2 text-violet-700"
          >
            About
          </NavLink>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Page title="Home Page" />}
          />
          <Route
            path="/about"
            element={<Page title="About Page" />}
          />
        </Routes>

        <p className="mt-4 text-sm text-slate-500">
          The browser address bar does not change.
        </p>
      </div>
    </MemoryRouter>
  );
}