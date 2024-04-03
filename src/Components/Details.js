import { useEffect, useState } from "react";

const Details = () => {
  const [data, setData] = useState("");
  const id = new URLSearchParams(document.location.search).get("key");
  useEffect(() => {
    fetch(" http://localhost:3001/blog/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className=" blogCard w-4/6  mb-4 rounded-md ml-4 p-4 hover:bg-slate-200 opacity-95 cursor-pointer ">
      <div className="tittle w-full  h-max font-semibold text-lg text-left ">
        {data.title}{" "}
      </div>
      <div className="text w-full text-left">{data.text}</div>

      <div className="info flex justify-between">
        <div className="name">
          <p>
            By <span>{data.user}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
