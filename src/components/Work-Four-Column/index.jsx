/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { LazyLoadImage } from "react-lazy-load-image-component";

let newProjectLayout = [
  'Dharmaveer 2',
  'Ulajh',
  'Munjya',
  'Deadpool & Wolverine',
  'Vedha',
  'Rang de Basanti',
  'Ishq Vishq Rebound',
  'Adhinayak',
  'Ranga Shoor',
  'Auron Mein Kahan Dum Tha',
  'Hindustani 2',
  'Godhra',
  'Stree 2',
  'Bad Boys'
]


const WorkFourColumn = ({ projects, newProjectLayout }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  return (
    <>
      <section className="works filter-img four-col section-padding">
        <div className="container-fluid">
          <div className="filtering text-center mb-30">
            {/* <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".completed">Completed</span>
              <span data-filter=".ongoing">Ongoing</span>
            </div> */}
          </div>
          <div className="row gallery">
            {projects.map((project, index) => {
              return (
                <div className={`col-lg-4 col-md-6 items ${project?.attributes?.project_status}`} key={index}
                  style={{ cursor: "pointer" }}
                >
                  {/* <Link legacyBehavior href={`/project-details?name=${project.attributes?.name?.replace(/\s+/g, '_').toLowerCase()
                    }`}> */}
                  <div className="item">
                    <div className="img">
                      <LazyLoadImage src={project} alt={newProjectLayout[index]}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          // objectPosition: "right",
                          aspectRatio: "1/1",
                        }}
                      />
                    </div>
                    <div className="cont">
                      <h3>
                        {newProjectLayout[index]}
                      </h3>
                      {/* <span>{project.attributes?.location}</span> */}
                      {/* <span>Modern</span> */}
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkFourColumn;
