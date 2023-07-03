import "./skills.css";
import Card from "../../components/Card";
import data from "./data";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        eveniet voluptatem qui est sunt sit?
      </p>
      <div className="container skills__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="skill light">
            <div className="skill__icon">{item.icon}</div>
            <div className="skill__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
