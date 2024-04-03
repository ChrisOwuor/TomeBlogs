import React from "react";
import "./App.css";
import AddBlogs from "./Components/AddBlogs";
import AsideNav from "./Components/AsideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import ProfileDetail from "./Components/ProfileDetail";
import Details from "./Components/Details";

function App() {
  return (
    <div className="App ">
      <Router>
        <div className="bodyCont grid grid-cols-3 h-screen ">
          <div className="leftAside  col-span-1">
            <AsideNav />
          </div>
          <div className="rightAside col-span-2 overflow-y-scroll ">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/AddBlogs" component={AddBlogs} />
              <Route path="/Profile" component={Profile} />
              <Route path="/ProfileDet" component={ProfileDetail} />
              <Route path="/detail" component={Details} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
