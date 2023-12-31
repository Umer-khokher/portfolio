import React from "react";
import "./projects.css";
import complaint from "../../assets/complaint.png";
import cigar from "../../assets/mrandersonscigars.se.png";
import perfume from "../../assets/myperfumemarket.co.uk.png";
import prince from "../../assets/princecapitalmotors.com.png";
import asteco from "../../assets/propertyconcierge.ae.png";
import wanyou from "../../assets/wanyou.plandstudios.com.png";


const Projects = () => {
  
  return (
    
    <section className="Projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Projects that i have worked on</span>
      <div className="container">  
        <div className="projects__content grid">
          <div className="project1__img">
            <a target="_blank" href="https://complaint.plandstudios.com/" rel="noreferrer">
              <img src={complaint} alt="complaint" className="project-complaint" />
            </a>
          </div>
          <div className="project1__text">
            <h3>Complaint 💬</h3>
            <p>ComplaintResolve: Your online platform to voice concerns and resolve issues. User-friendly interface for easy complaint submission, tracking, and resolution. Seamlessly address customer grievances.</p>
            <div className="stack">
                <p>Laravel</p>
                <p>Codeigniter</p>
            </div>
            <div className="links">
              {/* <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">Code 
                <i className="uil uil-github link-icon"></i>
              </a> */}
              <a target="_blank" href="https://complaint.plandstudios.com/" rel="noreferrer">Live Demo
              <i className="uil-arrow-up-right link-icon"></i></a>
            </div>
          </div>
        </div>
        <div className="projects__content grid">
          <div className="project1__text">
            <h3>MR.Anderson's Cigars 🚬</h3>
            <p>Mr. Anderson's Cigar: Your premium online cigar destination. Explore, purchase, and savor the finest cigars with our sophisticated platform. Discover exquisite flavors and exceptional quality, whether you're a connoisseur or newcomer.</p>
            <div className="stack">
                <p>Codeigniter</p>
                <p>PHP</p>
            </div>
            <div className="links">
              {/* <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">Code 
                <i className="uil uil-github link-icon"></i>
              </a> */}
              <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">Live Demo
              <i className="uil-arrow-up-right link-icon"></i></a>
            </div>
          </div>
          <div className="project1__img">
            <a target="_blank" href="https://mrandersonscigars.se/" rel="noreferrer">
              <img src={cigar} alt="first" className="project-cigar" />
            </a>
          </div>
        </div>
        <div className="projects__content grid">
          <div className="project1__img">
            <a target="_blank" href="https://myperfumemarket.co.uk" rel="noreferrer">
              <img src={perfume} alt="complaint" className="project-perfume" />
            </a>
          </div>
          <div className="project1__text">
            <h3>MY PERFUME MARKET 🌸🍃</h3>
            <p>My Perfume Market: Your online haven for exquisite fragrances. Explore, select, and acquire luxurious perfumes. Discover your perfect scent to elevate your style and make a lasting impression.</p>
            <div className="stack">
                <p>HTML</p>
                <p>CSS</p>
            </div>
            <div className="links">
              {/* <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">Code 
                <i className="uil uil-github link-icon"></i>
              </a> */}
              <a target="_blank" href="https://complaint.plandstudios.com/" rel="noreferrer">Live Demo
              <i className="uil-arrow-up-right link-icon"></i></a>
            </div>
          </div>
        </div>
        <div className="projects__content grid">
          <div className="project1__text">
            <h3>Prince Capital Motors 🚗</h3>
            <p>Prince Capital Motors, your premier online destination for car enthusiasts and buyers. Our platform simplifies the car-buying process, offering a diverse range of quality vehicles to choose from. Find your perfect ride with us.</p>
            <div className="stack">
                <p>HTML</p>
                <p>CSS</p>
            </div>
            <div className="links">
              {/* <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">Code 
                <i className="uil uil-github link-icon"></i>
              </a> */}
              <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">Live Demo
              <i className="uil-arrow-up-right link-icon"></i></a>
            </div>
          </div>
          <div className="project1__img">
            <a target="_blank" href="https://princecapitalmotors.com" rel="noreferrer">
              <img src={prince} alt="first" className="project-prince" />
            </a>
          </div>
        </div>
        <div className="projects__content grid">
          <div className="project1__img">
            <a target="_blank" href="https://propertyconcierge.ae" rel="noreferrer">
              <img src={asteco} alt="complaint" className="project-asteco" />
            </a>
          </div>
          <div className="project1__text">
            <h3>Property Concierge 🏡</h3>
            <p>Property Concierge, your trusted partner in real estate, is your go-to online destination for finding and securing your dream property. Our platform simplifies property buying, offering a diverse range of listings to suit your needs. Discover your perfect property with Property Concierge.</p>
            <div className="stack">
                <p>Laravel</p>
                <p>PHP</p>
            </div>
            <div className="links">
              {/* <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">Code 
                <i className="uil uil-github link-icon"></i>
              </a> */}
              <a target="_blank" href="https://complaint.plandstudios.com/" rel="noreferrer">Live Demo
              <i className="uil-arrow-up-right link-icon"></i></a>
            </div>
          </div>
        </div>
        <div className="projects__content grid">
          <div className="project1__text">
            <h3>DaPanda 🛒</h3>
            <p>DaPanda, your ultimate online shopping destination, is where your shopping dreams come true. Our platform offers a vast selection of products, from fashion to electronics, all at your fingertips. Experience the joy of shopping with DaPanda.</p>
            <div className="stack">
                <p>Laravel</p>
                <p>PHP</p>
            </div>
            <div className="links">
              {/* <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">Code 
                <i className="uil uil-github link-icon"></i>
              </a> */}
              <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">Live Demo
              <i className="uil-arrow-up-right link-icon"></i></a>
            </div>
          </div>
          <div className="project1__img">
            <a target="_blank" href="https://wanyou.plandstudios.com" rel="noreferrer">
              <img src={wanyou} alt="first" className="project-wanyou" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
