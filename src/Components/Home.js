import { useState, useEffect } from "react";
import Blog from "./Blog";
import "../App.css";
import "../index.css";

const Home = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3001/blog", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.log(err));
  }, []);

  const renderBlogs = (blogsParam) => {
    const blogS =
      blogsParam &&
      blogsParam.map((item) => <Blog key={item.id} item={item} />);
    return blogS;
  };
  const blogs = renderBlogs(blog);

  return <div >{blogs}</div>;
};

export default Home;
