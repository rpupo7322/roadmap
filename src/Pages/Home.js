import React from "react";
import NavBar from "../Components/NavBar";

const Home = () => {


  return (
    <div>
      <NavBar />

      {/* <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="red" />
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

      </svg> */}

      <svg>
        <g>
          <rect x="0" y= "0" width = '300' height = '40' fill="rgb(255,255,0)"></rect>
          <text x="85" y= "25" fill="red" font-style="normal" font-weight="bold" font-size="17" >
            <tspan>
            Version Control
            </tspan>  
          </text>
        </g>
        <g>
          <rect x="0" y= "80" width = '300' height = '40' fill="rgb(255,255,0)"></rect>
          <text x="85" y= "105" fill="red" font-style="normal" font-weight="bold" font-size="17" >
            <tspan>
            Repo hosting services
            </tspan>  
          </text>
        </g>


        <g>
          <rect x="0" y= "80" width = '300' height = '40' fill="rgb(255,255,0)"></rect>
          <text x="85" y= "105" fill="red" font-style="normal" font-weight="bold" font-size="17" >
            <tspan>
            Relational Databases
            </tspan>  
          </text>
        </g>
        <g>
          <rect x="0" y= "80" width = '300' height = '40' fill="rgb(255,255,0)"></rect>
          <text x="85" y= "105" fill="red" font-style="normal" font-weight="bold" font-size="17" >
            <tspan>
            More about Databases
            </tspan>  
          </text>
        </g>
        <g>
          <rect x="0" y= "80" width = '300' height = '40' fill="rgb(255,255,0)"></rect>
          <text x="85" y= "105" fill="red" font-style="normal" font-weight="bold" font-size="17" >
            <tspan>
            NoSQL Databases
            </tspan>  
          </text>
        </g>


        <g>
          <rect x="0" y= "80" width = '300' height = '40' fill="rgb(255,255,0)"></rect>
          <text x="85" y= "105" fill="red" font-style="normal" font-weight="bold" font-size="17" >
            <tspan>
            APIs
            </tspan>  
          </text>
        </g>


        <g>
          <rect x="0" y= "80" width = '300' height = '40' fill="rgb(255,255,0)"></rect>
          <text x="85" y= "105" fill="red" font-style="normal" font-weight="bold" font-size="17" >
            <tspan>
            Caching
            </tspan>  
          </text>
        </g>

      </svg>


    </div>
  );
};

export default Home;
