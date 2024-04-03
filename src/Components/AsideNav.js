import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EditNoteIcon from "@mui/icons-material/EditNote";
const AsideNav = () => {
  return (
    <div className="aside1  flex justify-center">
      <ul>
        <li className=" m-4 rounded-md p-1 ">
          <NavLink to={"/"}>
            <div className="flex flex-row items-center  rounded-md   ">
              <p className="text-lg font-semibold underline">Tome Blogs</p>
            </div>
          </NavLink>
        </li>
        <li className=" m-4 bg-gray-200 rounded-md p-1 ">
          <NavLink to={"/"}>
            <div className="flex flex-row items-center  rounded-md   ">
              <HomeIcon fontSize="medium" />
              <p>Home</p>
            </div>
          </NavLink>
        </li>
        <li className=" m-4 bg-gray-200 rounded-md p-1">
          <NavLink to={"/AddBlogs"}>
            {" "}
            <div className="flex flex-row  items-center  rounded-md   ">
              {" "}
              <EditNoteIcon fontSize="medium" />
              <p>Add Blogs</p>
            </div>
          </NavLink>
        </li>
        <li className=" m-4 bg-gray-200 rounded-md p-1">
          <NavLink to={"/Profile"}>
            {" "}
            <div className="flex flex-row items-center  rounded-md   ">
              {" "}
              <AccountCircleRoundedIcon fontSize="medium" />
              <p>View Profile</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AsideNav;
