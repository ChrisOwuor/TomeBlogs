
import {  NavLink} from "react-router-dom";
import"../App.css"
const Blog = ({ item }) => {
  return (
    <NavLink to={`/detail/?key=${item.id}`} className=" mt-4 mb-4 ">
      <div
        // onClick={() => HandleClick(item.key)}
        className=" blogCard w-4/6 shadow-lg  mb-4 rounded-md outline-1 outline ml-4 p-4 hover:bg-slate-200 opacity-95 cursor-pointer "
      >
        <div className="tittle w-full  h-max font-semibold text-lg text-left ">
          {item.title}{" "}
        </div>
        <div className="text w-full text-left">{item.text}</div>

        <div className="info flex justify-between">
          <div className="img  rounded-full outline outline-1 bg-slate-500 flex  justify-center w-12 h-12 ">
            image{" "}
          </div>

          <div className="name">
            <p>
              By <span>{item.user}</span>
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Blog;
