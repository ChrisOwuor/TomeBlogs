import Blog from "./Blog";
import { useEffect, useState } from "react";


const Details = () => {
    const[data,setBlog]= useState("")
    const id = new URLSearchParams(document.location.search).get("key");
     useEffect(() => {
       fetch(" http://localhost:3000/blog/"+id, {
         method: "GET",
       })
         .then((res) => res.json())
         .then((data) => setBlog(data))
         .catch((err) => console.log(err));
     },[id]);


console.log(data);

    return <div>
      <Blog item={data} />
        

  </div>;
};

export default Details;
