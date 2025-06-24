import React from "react";
import "./Skills.scss";

const Skills = ({ sharedSkills, resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo?.section_name?.skills || "";
  const skillsList = sharedSkills?.icons?.map((skill, index) => (
    <li className="list-inline-item mx-3" key={index}>
      <div className="text-center skills-tile">
        <i className={`${skill.class} skill-icon-font`}>
          <p className="skill-icon-label text-center">{skill.name}</p>
        </i>
      </div>
    </li>
  )) || [];

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skillsList}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;