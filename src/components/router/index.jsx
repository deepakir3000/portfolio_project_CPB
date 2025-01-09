import { Route, Routes } from "react-router-dom";

import Layout from "../layout/admin";
import { nonAuthRoutes } from "./router";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {nonAuthRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              index={route?.index}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Router;
