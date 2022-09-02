import React, { useState, useEffect }  from "react";
import NavBar from "../Components/NavBar";
// import SVG from "../Component/svg";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (
    <div>
      <NavBar />
      {/* <SVG/> */}
      {/* <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="red" />
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

      </svg> */}

      


    </div>
  );
};

export default Home;
