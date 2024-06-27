import React from "react";

const ContactInfo = ({ data }) => {
  const { office_address, phone_number_1, phone_number_2, info_email, bussiness_enquire_email } = data
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="playfont">Call Us</h6>
                <p>+91 8249774879</p>
                <p>{" "} &nbsp;</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="playfont">Email Us</h6>
                <p>prashant@prakashfilms.co.in</p>
                <p>{" "} &nbsp;</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="playfont">Address</h6>
                <p>
                  Plot No – 75, Bishram Nagar, Behind OSL Tower, Link Road, Cuttack, Odisha -753012
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
