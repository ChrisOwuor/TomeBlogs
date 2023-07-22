import { useState, useEffect } from "react";
import Blog from "./Blog";
import "../App.css";
import "../index.css";

const Home = () => {
    const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/blog", {
      method: "GET",
    }).then((res) => res.json())
      .then((data) => setBlog(data))
    .catch((err)=>console.log(err))
  },[]);

  const HandleClick = (id) => {
    var newData = [...blog];
    setBlog(newData.filter((item) => item.key === id));
  };

  // render blogs
  const renderBlogs = (blogsParam) => {
    const blogS = blogsParam.map((item) => (
      <Blog key={item.id} item={item} HandleClick={HandleClick} />
    ));
    return blogS;
  };
  const blogs = renderBlogs(blog);

  return <div>{blogs}</div>;
};

export default Home;
