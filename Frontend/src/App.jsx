import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router"
import HomePage from "./pages/Home/LandingPage";
import LandingPage from "./pages/Home/LandingPage";


function App() {


  return (
    <>
      <RouterProvider router={router} />
      {/* <LandingPage/> */}
    </>
  );
}

export default App;
