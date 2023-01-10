
import './topbar.scss'
import {Person, Mail, GitHub, Work} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  
  return (
    <div className={"topbar " + (menuOpen && "active")}>  
        <div className="wrapper">
            <div className="left" onClick={()=>setMenuOpen(false)}>
              <a href="#intro" className='logo'>
                silo.
                </a>
              <div className="phone">
                <Person className='icon' />
                <span>270 535 1538</span>
              </div>
              <div className="itemContainer1">
                <Mail className='icon' onClick= {() => window.location.replace("/#contact")}/>
                <span onClick= {() => window.location.replace("/#contact")}>silowebdev@gmail.com</span>
              </div>
              <div className="itemContainer2">
                <GitHub className="icon" onClick={() => openInNewTab('https://github.com/twodozeneggs')}/>
                <span className="icon" onClick={() => openInNewTab('https://github.com/twodozeneggs') }>Github</span>
              </div>
              <div className='itemContainer3'>
                <Work className="icon" onClick={() => openInNewTab('https://drive.google.com/file/d/13-z2GYdknqqDsmc8DdqrC0i7dex24qEF/view?usp=sharing')}/>
                <span className="icon" onClick={() => openInNewTab('https://drive.google.com/file/d/13-z2GYdknqqDsmc8DdqrC0i7dex24qEF/view?usp=sharing') }>Resume</span>
              </div>
            </div>
            <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen) }>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>

              </div>
            </div>
          </div>
      </div>
  )
}
