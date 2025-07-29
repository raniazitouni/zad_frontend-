import React from "react";
import SideBar from "./components/SideBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <div className="bg-white flex items-stretch gap-4 min-h-screen">
        <SideBar />
        <ProductList />
      </div>
    </>
  );
}

export default App;
