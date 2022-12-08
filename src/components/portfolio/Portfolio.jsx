import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState } from "react";


export default function Portfolio() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  const [selected, setSelected] = useState("featured");
  
  const list = [
    {
      id: "featured",
      title: "Featured",
    }, 
    {
      id: "web app",
      title: "Web App",
    },
    {
      id: "mobile app",
      title: "Mobile App",
    }, 
    {
      id: "design",
      title: "Design",
    }, 
    {
      id: "branding",
      title: "Branding",
    },    
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected} 
            id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          <div className="item" onClick={() => openInNewTab("https://github.com/twodozeneggs/Pokedex")} >
            <img src="assets/pokedex.png" alt="something"/>
            <h3>Pokedex</h3>
          </div>
          <div className="item" onClick={() => openInNewTab("https://github.com/twodozeneggs/myFlix-react")}>
            <img src="assets/myflix-react.png" alt="something"/>
            <h3>React App</h3>
          </div>
          <div className="item" onClick={() => openInNewTab("https://github.com/twodozeneggs/myflix-angular")}>
            <img src="assets/myflix-angular.png" alt="something"/>
            <h3>Angular App</h3>
          </div>
          <div className="item" onClick={() => openInNewTab("https://github.com/twodozeneggs/Chat-App")}>
            <img src="assets/chat.png" alt="something"/>
            <h3>Chat App</h3>
          </div>
          <div className="item" onClick={() => openInNewTab("https://github.com/twodozeneggs/to-do-list-app")}>
            <img src="assets/to-do-list.png" alt="something"/>
            <h3>To-Do List App</h3>
          </div>
          <div className="item" onClick={() => openInNewTab("https://github.com/twodozeneggs/meet")}>
            <img src="assets/meet-app.png" alt="something"/>
            <h3>Meet App</h3>
          </div>
        </div>
    </div>
          
  )
}
