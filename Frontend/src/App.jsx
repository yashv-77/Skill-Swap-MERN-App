import React from "react";

import HomePage from "./pages/Home/HomePage";


function App() {

  
  return (
    <>
    <HomePage/>
      {/* <BrowserRouter>
        <div>
          <Routes>
            <Route
            path ='/'
            element ={<HomePage/>}
            />
            
            <Route
            path ='/register'
            element ={<Register/>}
            />
            
            <Route
            path ='/login'
            element ={<Login/>}
            />

            <Route
            path ='/mainlayout'
            element ={<MainLayout/>}
            />
            

          </Routes>
        </div>
      </BrowserRouter> */}
    </>
  );
}

export default App;
