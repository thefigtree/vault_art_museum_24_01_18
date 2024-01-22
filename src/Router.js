import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Router = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <HashRouter>
      <Routes>
        <Route
          path={routes.home}
          element={
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
              <Home></Home>
            </ThemeContext.Provider>
          }
        ></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
