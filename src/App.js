
import React from 'react'
import "./App.css";
import AddBlogs from "./Components/AddBlogs";
import AsideNav from "./Components/AsideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from './Components/Profile';
import ProfileDetail from './Components/ProfileDetail';
// import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <div className=" headCont w-full bg-white h-max justify-around rounded-sm shadow-md p-8 flex  flex-row align-middle ">
        <div className="headCont sticky:top-0  ">
          <h1 className="text-4xl font-semibold text-center">
            Times <span className="underline ">Blogs</span>{" "}
          </h1>
        </div>
        <div className="search  w-1/6 ">
          <input
            type="text"
            placeholder="Search Blogs"
            className=" w-full shadow-lg shadow-slate-400 outline-1 outline rounded-md p-3 focus:outline "
          />
          {/* <div className="prediction bg-white outline outline-1 rounded-md absolute w-1/6 out line z-10">
            <ul>
              <li>agric</li>
              <li>jdoefefnrf</li>
              <li>frjfnrfrjfrn</li>
              <li>frjfnrfrjfrn</li>
              <li>frjfnrfrjfrn</li>
              <li>frjfnrfrjfrn</li>
            </ul>
          </div> */}
        </div>
      </div>
      <Router>
        <div className="bodyCont flex  mt-5  gap-4 ml-3 mr-3">
          <div className="leftAside  h-full w-2/6  ">
            <AsideNav />
          </div>

          <div className="rightAside w-5/6  flex  flex-row ">
            {/* <ScrollToTop> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/AddBlogs" component={AddBlogs} />
              <Route path="/Profile" component={Profile} />
              <Route path="/ProfileDet" component={ProfileDetail} />
            </Switch>
            {/* </ScrollToTop> */}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
