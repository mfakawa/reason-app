import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CardProvider } from "./Contexts/CardContext";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Body/Home";
import { Search } from "./Components/Body/Search";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <CardProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search/:id" component={Search} />
        </Switch>
        <Footer />
      </CardProvider>
    </BrowserRouter>
  );
}

export default App;
