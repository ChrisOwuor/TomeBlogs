import { NavLink } from "react-router-dom";
import "../App.css";
const Blog = ({ item }) => {
  return (
    <NavLink to={`/detail/?key=${item.id}`} className="  ">
      <div className=" blogCard w-4/6    rounded-md  ml-4 pb-4 hover:bg-slate-200 opacity-95 cursor-pointer ">
        <div className="tittle w-full  h-max font-semibold text-lg text-left ">
          {item.title}{" "}
        </div>
        <div className="text w-full text-left">{item.text}</div>
        <div className="info flex justify-between">
          <div className="name">
            <p>
              By <span>{item.user}</span>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </NavLink>
  );
};

export default Blog;
