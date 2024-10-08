import React from "react";

const AboutUs1 = ({ data }) => {
  const {
    about_us_title,
    about_us_content,
    flats_completed,
    families_satisfied,
    awards,
    established_since,
    about_us_image,
  } = data;
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="exp-img wow fadeInUp" data-wow-delay=".3s">
              <div
                className="img bg-img wow imago"
                style={{
                  // backgroundImage: `url(${about_us_image?.data.attributes.url})`,
                  backgroundImage: `url(${'/assets/img/mobile-hero/mobile-img-9.jpg'})`,
                }}
              >
                <div className="since playfont">
                  <span>Since</span>
                  <span>
                    {/* {
                      // print the year from established_since which is in the format YYYY-MM-DD
                      established_since.split("-")[0]
                    } */}
                    2014
                  </span>
                </div>
                <div className="years playfont">
                  <h2>
                    {/* {
                      // calculate years of experience from established_since which is in the format YYYY-MM-DD
                      new Date().getFullYear() -
                      parseInt(established_since.split("-")[0])
                    } */}
                    10
                  </h2>
                  <h5>Years Experience</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="exp-content wow fadeInUp" data-wow-delay=".3s">
              <h6 className="sub-title">About Us</h6>
              {/* <h2 className="mb-20 playfont">{about_us_title}</h2> */}
              <h2 className="mb-20 playfont">Bringing latest shows to your fingertips</h2>
              {/* <p>{about_us_content}</p> */}
              <p>Our mission is to connect filmmakers with global audiences by providing comprehensive and tailored distribution solutions. We believe in the power of storytelling and strive to support filmmakers in sharing their unique visions, making sure their voices are heard and appreciated across the globe.</p>
              <div className="numbers mt-50">
                <div className="row">
                  <div className="col-md-6">
                    <div className="item">
                      <h3>
                        <span className="nbr playfont">&nbsp;{Intl.NumberFormat('en-IN').format(flats_completed)}</span>
                      </h3>
                      <h6>&nbsp; &nbsp;TIMES VIEWED</h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="item">
                      <h3>
                        <span className="nbr playfont">
                          &nbsp; {families_satisfied}
                        </span>
                      </h3>
                      <h6>&nbsp; &nbsp;CLIENTS SATISFIED</h6>
                    </div>
                  </div>

                  {/* <div className="col-md-4">
                    <div className="item">
                      <h3>
                        <span className="nbr playfont">{awards}</span>
                      </h3>
                      <h6>AWARDS WON</h6>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
