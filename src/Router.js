import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { useState } from "react";

const Router = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <HashRouter>
      <Routes>
        <Route
          path={routes.home}
          element={<Home isDark={isDark} setIsDark={setIsDark}></Home>}
        ></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
