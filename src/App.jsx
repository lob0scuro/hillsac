import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import RootLayout from "./layout/RootLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import Plans from "./routes/Plans";

const App = () => {
  useEffect(() => {
    toast.custom(
      (t) => (
        <span className="toasterMessage">
          WE ARE OPEN 24/7 FOR EMERGENCY CALLS{" "}
          <button onClick={() => toast.dismiss(t.id)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </span>
      ),
      { duration: Infinity }
    );
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
