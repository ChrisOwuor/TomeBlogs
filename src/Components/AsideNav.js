import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EditNoteIcon from "@mui/icons-material/EditNote";
const AsideNav = () => {
  return (
    <div className="aside1  flex justify-center">
      <ul>
        <li className=" m-4 ">
          <NavLink to={"/"}>
            <div className="flex flex-row align-middle outline-1 rounded-md outline p-5 shadow-md gap-4">
              <HomeIcon fontSize="large" />
              <p>Home</p>
            </div>
          </NavLink>
        </li>
        <li className=" m-4">
          <NavLink to={"/AddBlogs"}>
            {" "}
            <div className="flex flex-row align-middle outline-1 rounded-md outline p-5 shadow-md gap-4">
              {" "}
              <EditNoteIcon fontSize="large" />
              <p>Add Blogs</p>
            </div>
          </NavLink>
        </li>
        <li className=" m-4">
          <NavLink to={"/Profile"}>
            {" "}
            <div className="flex flex-row align-middle outline-1 rounded-md outline p-5 shadow-md gap-4">
              {" "}
              <AccountCircleRoundedIcon fontSize="large" />
              <p>View Profile</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AsideNav;
