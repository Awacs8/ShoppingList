import React from "react";
//mport { EasybaseProvider } from "easybase-react";
//import ebconfig from "./ebconfig";
import "./App.css";
import Header from "./components/Header";
import ListWrapper from "./containers/ListWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <ListWrapper />
      {/* <EasybaseProvider ebconfig={ebconfig}>
        <ListWrapper />
      </EasybaseProvider> */}
    </div>
  );
}

export default App;
