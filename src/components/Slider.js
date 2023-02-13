import React from "react";
import Slider1 from "../images/Slider1.jpg";
import Slider2 from "../images/Slider2.jpg";
import Slider3 from "../images/Slider3.jpg";

function Slider() {
    return (
              <div className="container-fluid">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                          <img src={Slider1} className="d-block w-100" alt="..." />
                       </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img src={Slider2} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Slider3} className="d-block w-100" alt="..." />
                      </div>
                    </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
        </div>
    );
}

export default Slider;