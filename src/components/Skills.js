import React from 'react';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p></p>              
              {/* Linear Progress Bars */}
              <div className="row">
                {/* Add a className or inline style to increase spacing */}
                <div className="col-md-6 animate-box mb-4"> {/* Added mb-4 for bottom margin */}
                  <div className="progress-wrap ftco-animate">
                    <h3>Web Devlopment</h3>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 animate-box mb-4"> {/* Added mb-4 for bottom margin */}
                  <div className="progress-wrap ftco-animate">
                    <h3>React</h3>
                    <div className="progress">
                      <div className="progress-bar color-2" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 animate-box mb-4"> {/* Added mb-4 for bottom margin */}
                  <div className="progress-wrap ftco-animate">
                    <h3>Express</h3>
                    <div className="progress">
                      <div className="progress-bar color-3" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 animate-box mb-4"> {/* Added mb-4 for bottom margin */}
                  <div className="progress-wrap ftco-animate">
                    <h3>Node</h3>
                    <div className="progress">
                      <div className="progress-bar color-3" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 animate-box mb-4"> {/* Added mb-4 for bottom margin */}
                  <div className="progress-wrap ftco-animate">
                    <h3>Java</h3>
                    <div className="progress">
                      <div className="progress-bar color-3" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                        <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 animate-box mb-4"> {/* Added mb-4 for bottom margin */}
                  <div className="progress-wrap ftco-animate">
                    <h3>Python</h3>
                    <div className="progress">
                      <div className="progress-bar color-4" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                        <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
