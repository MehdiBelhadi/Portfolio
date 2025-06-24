import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "./Projectdetailsmodal.scss";

class ProjectDetailsModal extends Component {
  render() {
    let title = "";
    let description = "";
    let url = "";
    let technologies = [];
    let images = [];

    if (this.props.data) {
      ({ title, description, url, technologies = [], images = [] } = this.props.data);
    }

    const tech = technologies.map((icons, i) => (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center">
            <i className={`${icons.class} tech-icon`}>
              <p className="tech-label">{icons.name}</p>
            </i>
          </div>
        </span>
      </li>
    ));

    const img = images.map((elem, i) => <div key={i} data-src={elem} />);

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto padding-bottom-lg">
            <div className="slider-tab">
              <span className="iconify slider-iconfiy margin-left-xs" data-icon="emojione:red-circle" data-inline="false" ></span>{" "}
              &nbsp;{" "}
              <span className="iconify slider-iconfiy" data-icon="twemoji:yellow-circle" data-inline="false"></span>{" "}
              &nbsp;{" "}
              <span className="iconify slider-iconfiy" data-icon="twemoji:green-circle" data-inline="false"></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 className="modal-title">
              {title}
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer" className="link-href margin-left-sm">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </h3>
            <p className="modal-description">{description}</p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{tech}</ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;