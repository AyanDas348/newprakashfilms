/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";


const WorkTwoColumn = ({ projects }) => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

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

  // if (projects?.filter((project) => project.attributes.project_status !== 'completed').length % 2 === 0) {
  //   newProjectLayout = [...projects?.filter((project) => project.attributes.project_status !== 'completed')]
  // } else {
  //   newProjectLayout = [...projects?.filter((project) => project.attributes.project_status !== 'completed'), ...projects?.filter((project) => project.attributes.project_status === 'completed').slice(0, 1)]
  // }


  return (
    <>
      <section className="works section-padding">
        <div className="container">
          <div className="section-head text-center mb-0">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="wow fadeInDown" data-wow-delay=".3s">
                  Best Works
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Distribution
                </h4>
              </div>
            </div>
          </div>
          <div className="row gallery
          ">
            {projects?.map((project, index) => (
              <div className="col-lg-6 items" key={index}>
                <Link
                  legacyBehavior
                  href={`/distribution`}
                >
                  <div className="item">
                    <div className="img">
                      <LazyLoadImage
                        visibleByDefault={true}
                        src={project}
                        alt={newProjectLayout[index]}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          aspectRatio: "1/1",
                        }}
                      />
                    </div>
                    <div className="cont vis">
                      <h5>{newProjectLayout[index]}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkTwoColumn;
