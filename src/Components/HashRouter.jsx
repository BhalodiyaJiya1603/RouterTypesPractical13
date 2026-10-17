import {
  HashRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function HashRouterDemo() {
  return (
    <HashRouter>
      <div className="rounded-2xl bg-blue-50 p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">
          HashRouter Demo
        </h2>

        <nav className="mb-5 flex gap-3">
          <NavLink to="/" end className="rounded-lg bg-blue-600 px-4 py-2 text-white">
            Home
          </NavLink>

          <NavLink to="/about" className="rounded-lg bg-white px-4 py-2 text-blue-700">
            About
          </NavLink>
        </nav>

        <div className="rounded-xl bg-white p-5">
          <Routes>
            <Route
              path="/"
              element={<h3 className="text-xl font-semibold">Home Page</h3>}
            />
            <Route
              path="/about"
              element={<h3 className="text-xl font-semibold">About Page</h3>}
            />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}