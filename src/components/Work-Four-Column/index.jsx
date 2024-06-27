/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { LazyLoadImage } from "react-lazy-load-image-component";

const staticProject = [
  {
    id: 1,
    attributes: {
      name: "The Epic Journey",
      location: "Global Release",
      project_status: "completed",
      main_photo: { data: { attributes: { url: "/assets/distribution/download.jpg" } } }
    }
  },
  {
    id: 2,
    attributes: {
      name: "A Day in the Life",
      location: "International Distribution",
      project_status: "ongoing",
      main_photo: { data: { attributes: { url: "/assets/distribution/download.jpg" } } }
    }
  },
  {
    id: 3,
    attributes: {
      name: "Global Adventure",
      location: "Worldwide Premiere",
      project_status: "completed",
      main_photo: { data: { attributes: { url: "/assets/distribution/download.jpg" } } }
    }
  },
  {
    id: 4,
    attributes: {
      name: "Silent Whispers",
      location: "Film Festival Circuit",
      project_status: "ongoing",
      main_photo: { data: { attributes: { url: "/assets/distribution/download.jpg" } } }
    }
  },
  {
    id: 5,
    attributes: {
      name: "Beyond the Horizon",
      location: "Limited Theatrical Release",
      project_status: "completed",
      main_photo: { data: { attributes: { url: "/assets/distribution/download.jpg" } } }
    }
  },
  {
    id: 6,
    attributes: {
      name: "The Lost City",
      location: "Nationwide Release",
      project_status: "ongoing",
      main_photo: { data: { attributes: { url: "/assets/distribution/download.jpg" } } }
    }
  },
  {
    id: 7,
    attributes: {
      name: "Cultural Tapestry",
      location: "International Showcase",
      project_status: "completed",
      main_photo: { data: { attributes: { url: "/assets/distribution/download.jpg" } } }
    }
  },
  {
    id: 8,
    attributes: {
      name: "Heartfelt Moments",
      location: "Special Screenings",
      project_status: "ongoing",
      main_photo: { data: { attributes: { url: "/assets/distribution/download.jpg" } } }
    }
  },
  {
    id: 9,
    attributes: {
      name: "Mystery Unveiled",
      location: "Online Streaming Platforms",
      project_status: "completed",
      main_photo: { data: { attributes: { url: "/assets/distribution/download.jpg" } } }
    }
  }
];


const WorkFourColumn = ({ projects }) => {
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
            {staticProject.map((project, index) => {
              return (
                <div className={`col-lg-4 col-md-6 items ${project?.attributes?.project_status}`} key={index}
                  style={{ cursor: "pointer" }}
                >
                  {/* <Link legacyBehavior href={`/project-details?name=${project.attributes?.name?.replace(/\s+/g, '_').toLowerCase()
                    }`}> */}
                  <div className="item">
                    <div className="img">
                      <LazyLoadImage src={project.attributes?.main_photo?.data?.attributes?.url} alt={project.attributes?.name}
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
                        {project.attributes?.name}
                      </h3>
                      <span>{project.attributes?.location}</span>
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
