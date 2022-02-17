import React from "react";
//mport { EasybaseProvider } from "easybase-react";
//import ebconfig from "./ebconfig";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./containers/Wrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper />
      {/* <EasybaseProvider ebconfig={ebconfig}>
        <ListWrapper />
      </EasybaseProvider> */}
    </div>
  );
}

export default App;
