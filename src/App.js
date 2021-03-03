import React from "react";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";
import "./App.css";
import Header from "./components/Header";
import ListWrapper from "./components/ListWrapper";

function App() {
  return (
    <div className="App">
      <EasybaseProvider ebconfig={ebconfig}>
        <Header />
        <ListWrapper />
      </EasybaseProvider>
    </div>
  );
}

export default App;