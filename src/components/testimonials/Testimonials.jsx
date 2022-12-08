import './testimonials.scss'

export default function Testimonials() {

   const data = [

    {
      id: 1, 
      name: "Danny Perry", 
      title: "Pluginplay Founder", 
      img: "assets/danny.jpeg",
      icon: "assets/youtube.png",
      desc: "Service was quick, easy to set up and very affordable, my users are going to love the new interface! Thank you Silo!",
    },
    {
      id: 2, 
      name: "Jack Loik", 
      title: "Freelance Photographer", 
      img: "https://static.wixstatic.com/media/e60290_6ea097c6104f4e6983a711daef268e52~mv2.jpg/v1/fit/w_347,h_201,q_90/e60290_6ea097c6104f4e6983a711daef268e52~mv2.jpg",
      icon: "assets/twitter.png",
      desc: "Setting up my photography website was a breeze with Simon, I told him how I wanted it to look like and before I knew it, it was all done! Thanks for being so fast, wedding season is almost here!",
      featured: true, 
    },
    {
      id: 3, 
      name: "Kentucky Honey CBD", 
      title: "Aviette Bioprocessing", 
      img: "assets/kh.webp",
      icon: "./assets/globe.png",
      desc: "Our team loved working with Silo on updating our website, really happy with how our site turned out! Professional, clean and easy to navigate.",
    },

   ]


  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d)=>(
        <div className={d.featured ? "card featured" : "card" }>
          <div className="top">
            <img className='left' src="assets/right-arrow.png" alt="" />
            <img className='user' src={d.img} alt="" />
            <img className='right' src={d.icon} alt="" />
          </div>
          <div className="center">{d.desc}</div>
          <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
