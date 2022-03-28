import Home from "../components/Home";
import { routes as componentRoutes } from "./routes";
import { Routes, Route } from "react-router-dom";

export default function routes() {
  return (
    <>
      <Routes>
        {componentRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={
              <Home routes={componentRoutes}>
                <route.component />
              </Home>
            }
          />
        ))}
      </Routes>
    </>
  );
}
