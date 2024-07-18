import React from "react";

const Vision = () => {
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
                                            <span className="nbr playfont">15 +</span>
                                        </h3>
                                        <h6>PRODUCTIONS</h6>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="item mb-50">
                                        <h3>
                                            <span className="nbr playfont">4 %</span>
                                        </h3>
                                        <h6>BOX OFFICE</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="txt-cont">
                            <h5 className="years about" style={{color: '#c0564a'}}>OUR VISION</h5>
                            <p className="mb-20 mt-40" style={{ textAlign: "justify" }}>
                                {/* {data.content} */}
                                Prakash films a leading distribution company in the east has branches in Bihar/ Jharkhand/ Odisha and soon will be coming up in Mumbai. Prakash Films is in to distribution/ exhibition and production. The vision of the company is to establish more cinema halls and produce films pan India; at the same time distribute films both in the domestic and international market. We have distributed more then thousand films ( Hindi/Odia/ telgu / Tamil/bhojpuri and English) and ensure films reach every look n corner of our territories. In the field of distribution the market share has increased due to our efforts eg. Bihar which had an average 3% collection of box office all India now has short up to 4%. This has reposed confidence amongst all our associate production houses. Our team consists of professional experts having vast experience in distribution/ programming and production. During the last one decade Prakash Film has been feeding more then 200 cinema halls in east India and with blessings of Lord Jaganath we hope to make our presence felt all over the country. Our sister concern Prakash and Dhiraj films which mostly deals with movies made in South India and ensures  that they are released in cinema halls across east and north India.
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vision;