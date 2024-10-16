import React from "react";
import Header from "./Header"
import { Link } from 'react-router-dom';;
import '../style/homePage.scss';
const HomePage: React.FC = () => {
    return (
      <div className="homepage">
        <Header />
        <main className="homepage-content">
          <h1 className="homepage-h1">
            Data science: Data Processing and Data Modelling for Companies
          </h1>
          <h2 className="homepage-h2">
            The future of a world <span className="highlight">linked</span> to intelligence.
          </h2>
          <p className="homepage-p">
            “From an etymological point of view, CORELIA comes from the word correlation: establishing relationships between data, IT and business areas; establishing relationships between our expertise and the increasing complexity in projects, intelligence and technologies. This is what CORELIA stands for.”
            <br />
            Thomas MEUNIER - CEO
          </p>
          <button className="vision-button">Our vision</button>
  
          <p className="homepage-p">Meapal, the correlation of know-how</p>
          <img src="Meapal values.png" alt="Icon" className="icon" /> 
  
          <div className="cards-container">
            <div className="card purple-card">
              <h3 className="card-title">Performance & Innovation</h3>
              <p className="card-subtitle">Company performance is primarily the result of personal performance</p>
              <span className="card-link">See more</span>
            </div>
            <div className="card red-card">
              <h3 className="card-title">Skill & Team cohesion</h3>
              <p className="card-subtitle">We live in a world that is always changing because disruptive technology appears faster and faster</p>
              <span className="card-link">See more</span>
            </div>
            <div className="card purple-card">
              <h3 className="card-title">Customer Satisfaction</h3>
              <p className="card-subtitle">Client satisfaction is at the heart of everything we do. We are convinced tha</p>
              <span className="card-link">See more</span>
            </div>
          </div>
          <img src="Meapal Service.png" alt="Icon" className="icon" />
          <div className="text-sections">
          <div className="text-row">
            <div className="text-block">
              <h3 className="text-title red-text">MSS</h3>
              <p className="text-description">“From an etymological point of view, CORELIA comes <br/>from the word correlation: establishing relationships<br/> between data, IT and business areas; establishing<br/> relationships between our expertise and the <br/>increasing complexity in projects, intelligence and<br/> technologies. This is what CORELIA stands for.”<br />Thomas MEUNIER - CEO</p>
            </div>
            <div className="text-block">
              <h3 className="text-title purple-text">AMS</h3>
              <p className="text-description">“From an etymological point of view, CORELIA comes <br/>from the word correlation: establishing relationships<br/> between data, IT and business areas; establishing<br/> relationships between our expertise and the <br/>increasing complexity in projects, intelligence and<br/> technologies. This is what CORELIA stands for.”<br />Thomas MEUNIER - CEO</p>
            </div>
          </div>
          <div className="horizontal-divider"></div> 
          <div className="text-row">
            <div className="text-block">
              <h3 className="text-title purple-text">RGPD</h3>
              <p className="text-description">“From an etymological point of view, CORELIA comes <br/>from the word correlation: establishing relationships<br/> between data, IT and business areas; establishing<br/> relationships between our expertise and the <br/>increasing complexity in projects, intelligence and<br/> technologies. This is what CORELIA stands for.”<br />Thomas MEUNIER - CEO</p>
            </div>
            <div className="text-block">
              <h3 className="text-title red-text">SAP</h3>
              <p className="text-description">“From an etymological point of view, CORELIA comes <br/>from the word correlation: establishing relationships<br/> between data, IT and business areas; establishing<br/> relationships between our expertise and the <br/>increasing complexity in projects, intelligence and<br/> technologies. This is what CORELIA stands for.”<br />Thomas MEUNIER - CEO</p>
            </div>
          </div>
          <div className="horizontal-divider"></div> 
          <div className="text-row">
            <div className="text-block">
              <h3 className="text-title red-text">DSI</h3>
              <p className="text-description">“From an etymological point of view, CORELIA comes <br/>from the word correlation: establishing relationships<br/> between data, IT and business areas; establishing<br/> relationships between our expertise and the <br/>increasing complexity in projects, intelligence and<br/> technologies. This is what CORELIA stands for.”<br />Thomas MEUNIER - CEO</p>
            </div>
            <div className="text-block">
              <h3 className="text-title purple-text">CLOUD POWER</h3>
              <p className="text-description">“From an etymological point of view, CORELIA comes <br/>from the word correlation: establishing relationships<br/> between data, IT and business areas; establishing<br/> relationships between our expertise and the <br/>increasing complexity in projects, intelligence and<br/> technologies. This is what CORELIA stands for.”<br />Thomas MEUNIER - CEO</p>
            </div>
          </div>
        </div>
        <div className="info-box">
          <img src="Mask group.png" alt="Relevant" className="info-image" />
          <div className="info-text">
            <p className="small-black-text">Exciting, Intelligence-Filled Professions</p>
            <p className="bold-purple-text">Aims and scope in <span className="red-text">data science</span></p>
            <p className="small-black-text">BioData Mining is an open access, open peer-reviewed, informatics journal encompassing <br /> research on all aspects of Artificial Intelligence (AI),<br /> Machine Learning, and Visual Analytics, applied to high-dimensional <br /> biological and biomedical data, focusing on computational aspects of <br /> knowledge discovery from large-scale genetic, genomic, metabolomic <br /> data and/or electronic health records, social determinants of health, and <br /> environmental exposure data.</p>
            <button className="discover-button" onClick={() => console.log("Discover button clicked!")}>Discover</button>
          </div>
        </div>
        <div className="info-box reverse">
    <img src="Group 76.png" alt="Relevant" className="info-image"/>
  <div className="info-text">
    <p className="small-black-text">Meapal is Recruiting in Europe!</p>
    <p className="bold-purple-text">Aims and scope in <span className="red-text">technical support</span></p>
    <p className="small-black-text">
    Automation involves using technology to replace the manual effort required <br/> for repetitive tasks. Using automation, you can streamline processes, <br/> improve collaboration, efficiency, productivity, and accuracy and save costs.<br/>
    For example, tasks like sending emails, acknowledging tickets, sending <br/> status updates, and answering frequently asked questions might be<br/> repetitive.
    </p>
    <button className="discover-button2" onClick={() => console.log("Discover button clicked!")}>Discover</button>
  </div>
</div>
<div className="image-info-box">
  <div className="img-info-text">
    <p className="small-black-text">They trusted us...</p>
    <div className="purple-text-container">
    <p style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ fontWeight: 'bold', color: 'purple' }}>See our </span>
    <span style={{ color: 'red' }}>references</span>
  </p>
      <div className="button-container">
        <button className="navigation-button" onClick={() => console.log("Previous clicked!")}>{"<"}</button>
        <button className="navigation-button" onClick={() => console.log("Next clicked!")}>{">"}</button>
      </div>
    </div>
  </div>
  <div className="image-row">
    <img src="Logo_InVivo.png" alt="Client 1" className="client-image" />
    <img src="1280px-Logo-raptdev.png" alt="Client 2" className="client-image" />
    <img src="cbp_logo.png" alt="Client 3" className="client-image" />
    <img src="filhet_logo.png" alt="Client 4" className="client-image" />
    <img src="Safran_-_logo_2016.png" alt="Client 5" className="client-image" />
    <img src="Sanofi-Logo-Vector.png" alt="Client 6" className="client-image" />
    <img src="Thales.png" alt="Client 7" className="client-image" />
    <img src="Murex_logo.png" alt="Client 8" className="client-image" />
  </div>
</div>
      </main>
    </div>
  );
};
export default HomePage;