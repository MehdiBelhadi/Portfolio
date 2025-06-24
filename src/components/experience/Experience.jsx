import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import "./Experience.scss";

class Experience extends Component {
  render() {
    let sectionName;
    let work;

    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.experience;

      work = this.props.resumeExperience.map((workItem, i) => {
        const mainTech = workItem.mainTech.map((tech, idx) => (
          <Badge pill className="main-badge mr-2 mb-2" key={idx}>
            {tech}
          </Badge>
        ));

        const tech = workItem.technologies.map((tech, idx) => (
          <Badge pill className="experience-badge mr-2 mb-2" key={idx}>
            {tech}
          </Badge>
        ));

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={workItem.years}
            iconStyle={{
              background: "#08C5D1",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-calendar-alt experience-icon"></i>}
            key={i}
          >
            <div className="badge-container">{mainTech}</div>
            <h3 className="vertical-timeline-element-title">{workItem.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{workItem.company}</h4>
            <div className="badge-container">{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="experience-section">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title">
              <span>{sectionName}</span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#08C5D1",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
