import AboutImage from "../../assets/about.png";
import CV from "../../assets/Hicham Alami Talbi.pdf";

import "./about.css";
import { HiDownload } from "react-icons/hi";

import Card from "../../components/Card";
import data from "../../components/data";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta
            sunt quam eum, error placeat velit. Deserunt!
          </p>
          <a href={CV} className="btn primary">
            Download CV
            <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
