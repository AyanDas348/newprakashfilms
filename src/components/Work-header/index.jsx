import React from "react";

const WorkHeader = ({ title, content, center, headerImage }) => {
  return (
    <header
      className="work-header bg-img valign"
      // style={{ backgroundImage: `url(${'/assets/img/patern.png'})` }}
    >
      <div className="container">
        <div className={`row ${center ? "justify-content-center" : ""}`}>
          <div className="col-lg-9">
            <div className={`cont ${center ? "text-center" : ""}`}>
              <h2>
                {typeof title == "object" ? (
                  <>
                    {title.first} <br /> {title.second}
                  </>
                ) : (
                  title
                )}
              </h2>

              <p>
                We are a dedicated team of film industry professionals driven by passion and expertise. Committed to excellence, we ensure timely delivery of every film distribution project we undertake. Our mission is to bring outstanding cinematic experiences to audiences worldwide, leveraging our industry knowledge and commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorkHeader;
