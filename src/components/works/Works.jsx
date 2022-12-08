/* eslint-disable no-template-curly-in-string */
import { useState } from "react";
import "./works.scss"

export default function Works() {
const [currentSlide, setCurrentSlide] = useState(0)
const data = [

  { 
    id: "1",
    icon: "assets/globe.png", 
    title: "Web Design",
    desc: "This is the first website I've ever built! Hope you like it, if there's any front-end web development I can assist you with, shoot me an email. ",
    img: "./assets/cover.png",
},
{ 
  id: "2",
  icon: "assets/mobile.png", 
  title: "App Design",
  desc: "Using React, I've built a Netflix clone and a Chatting app. Looking to make another app in the near future that helps people while cooking",
  img: "./assets/react.png",
}, 
{ 
  id: "3",
  icon: "assets/paint-palette.png", 
  title: "Other Projects",
  desc: "I have a couple projects in the works that are more personal than professional like a browser game, cooking app and a social media site that helps put people together with similar interests.",
  img: "https://99designs-start-assets.imgix.net/images/home/products/contest-color-3x-fd999e7d26.png?auto=format&ch=Width%2CDPR&w=460&h=453&dpr=2",
},
];

const handleClick = (way) => {
  way === "left" 
  ? setCurrentSlide (currentSlide > 0 ? currentSlide-1 : 2) 
  : setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0 );
}

return (
    <div className='works' id='works'>
      <h1>Services</h1>
         <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="mobile phone"/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
            ))}
         </div>
         <img src="assets/leftarrow.svg" className="arrow left" alt="" onClick={()=>handleClick("left")} />
         <img src="assets/rightarrow.svg" className="arrow right" alt="" onClick={()=>handleClick("right")} />
        </div>
  );
}