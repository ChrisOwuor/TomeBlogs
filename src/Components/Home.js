import { useState } from "react";
import Blog from "./Blog";

const Home = () => {
  const [blog, setBlog] = useState([
    {
      key: 1,
      title: "first Blog",
      user: "chris",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nesciunt quia quae ducimus ex reiciendis fuga omnis ratione delectus quod",
    },
    {
      key: 2,
      title: "second Blog",
      user: "sam",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nesciunt quia quae ducimus ex reiciendis fuga omnis ratione delectus quod",
    },
    {
      key: 3,
      user: "grace",

      title: "third Blog",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nesciunt quia quae ducimus ex reiciendis fuga omnis ratione delectus quod",
    },
    {
      key: 4,
      title: "fourthBlog",
      user: "grace",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nesciunt quia quae ducimus ex reiciendis fuga omnis ratione delectus quod",
    },
    {
      key: 5,
      title: "fifth Blog",
      user: "ema",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nesciunt quia quae ducimus ex reiciendis fuga omnis ratione delectus quod",
    },
  ]);

  const HandleClick = (id) => {
    var newData = [...blog];
    setBlog(newData.filter((item) => item.key === id));
  };
  return (
    <div>
      {blog.map((item) => (
        <Blog key={item.key} item={item} HandleClick={HandleClick} />
      ))}
    </div>
  );
};

export default Home;
