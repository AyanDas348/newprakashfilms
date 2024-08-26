/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { LazyLoadImage } from "react-lazy-load-image-component";


const WorkFourColumn = ({ projects, newProjectLayout }) => {
    React.useEffect(() => {
        setTimeout(() => {
            if (window.Isotope) initIsotope();
        }, 1000);
    }, []);

    return (
        <>
            <section className="works section-padding">
                <div className="container">
                    <div className="section-head text-center mb-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-10">
                                <h6 className="wow fadeInDown" data-wow-delay=".3s">
                                    Associated With
                                </h6>
                                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                                    Our Partners
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row gallery">
                        {projects.map((project, index) => {
                            return (
                                <div className={`col-lg-3 col-md-6 items ${project?.attributes?.project_status}`} key={index}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="item">
                                        <div className="img">
                                            <LazyLoadImage src={project} alt={newProjectLayout[index]}
                                                style={{
                                                    width: "100%",
                                                    objectFit: "contain",
                                                    // objectPosition: "right",
                                                    aspectRatio: "1/1",
                                                }}
                                            />
                                        </div>
                                        <div className="cont">
                                            {/* <h3>
                        {newProjectLayout[index]}
                      </h3> */}
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
