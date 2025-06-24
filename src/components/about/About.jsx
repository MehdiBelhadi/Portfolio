import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 className="about-title">
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span>
                  <img src={profilepic} alt="Profil" className="profile-pic" />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span className="iconify" data-icon="emojione:red-circle" data-inline="false" ></span>{" "}
                    &nbsp;
                    <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false" ></span>{" "}
                    &nbsp;
                    <span className="iconify" data-icon="twemoji:green-circle" data-inline="false" ></span>
                  </div>
                  <div className="card-body custom-card-body">
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
