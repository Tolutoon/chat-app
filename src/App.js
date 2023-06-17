import React from "react";
import Navbar from "./components/Navbar";

const style = {
  appContanier: `max-w-[720px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
}

function App() {
  return (
    <div className={style.appContanier}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat Component */}
      </section>
    </div>
  );
}

export default App;
