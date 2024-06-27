import React from "react";

const AboutUs4 = ({ data }) => {

  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" style={{ alignContent: "center", width: "fit" }}>
            <div className="numbers">
              <div className="col">
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr playfont">{data.projects_completed}</span>
                    </h3>
                    <h6>MOVIES DISTRIBUTED</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr playfont">{data.satisfied_clients}</span>
                    </h3>
                    <h6>Satisfied Clients</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="txt-cont">
              <p className="mb-20 mt-40" style={{ textAlign: "justify" }}>
                {/* {data.content} */}
                Established in 2014, Prakash Films was born out of a vision to revolutionize the movie distribution industry by bringing high-quality films to audiences worldwide. Our mission is to ensure that every story gets the audience it deserves, and every filmmaker finds the support they need to succeed.
                <br />
                At Prakash Films, we pride ourselves on our innovative and strategic approach to film distribution. Our extensive network and deep understanding of the industry enable us to maximize the reach and impact of each film we distribute. We combine cutting-edge technology with creative marketing strategies to ensure that films not only reach a wide audience but also leave a lasting impression.
                <br />
                We value the hard work and creativity of filmmakers, and we are committed to providing a seamless and supportive distribution process. From the initial planning stages to post-release analysis, we offer comprehensive support and guidance, ensuring that every step is handled with professionalism and care.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;

