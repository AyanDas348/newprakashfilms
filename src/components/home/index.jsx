/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../About-Us1";
import VideoHero from "../Video-Hero";
import LightLayout from "../../layouts/light";
import Testimonials from "../Testimonials1";
import Contact from "../Contact";
import WorkTwoColumn from "../Work-Two-Column";
import WorkFourColumn from "../Work-Four-Column";
import PromotionPopup from "../Promotion-Popup";
import SkillsCircle from "../Skills-Circle";
import VideoHeroMobile from "../Video-Hero-Mobile";
import { useMediaQuery } from "@mui/material";

const testimonials = [
  {
    testimonial: "Sample Testimonial. This is a sample testimonial. Data will be inserted later",
    name: "Ayan Das",
  },
  {
    testimonial: "Sample Testimonial. This is a sample testimonial. Data will be inserted later",
    name: "Ayan Das",
  },
  {
    testimonial: "Sample Testimonial. This is a sample testimonial. Data will be inserted later",
    name: "Ayan Das",
  },
  {
    testimonial: "Sample Testimonial. This is a sample testimonial. Data will be inserted later",
    name: "Ayan Das",
  },
];

const footer = {
  map_iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.303465946641!2d85.88857858504524!3d20.452725458485276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d269e94e3f5%3A0x888c137d183bd10e!2sPrakash%20films!5e0!3m2!1sen!2sin!4v1719499309469!5m2!1sen!2sin"
}

const Home1 = ({ projects, data, footerData }) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  const { header_video, header, banner, header_thumbnail } = data.data?.attributes ?? {}
  const isMobile = useMediaQuery('(max-width:600px)');

  const header_images = Array.from({ length: 3 }).map((_, i) => `/assets/hero/img-${i + 1}.jpg`)

  return (
    <LightLayout
      footerClass={"mt-30"} footerData={footerData}>
      {isMobile ? (
        <VideoHeroMobile
          header={header}
          header_thumbnail={header_thumbnail}
          header_images={header_images}
        />
      ) : (
        <VideoHero
          header_video={header_video}
          header={header}
          header_thumbnail={header_thumbnail}
          header_images={header_images}
        />
      )}
      <AboutUs1 data={data?.data?.attributes} />
      <SkillsCircle banner={banner} showLearnMore />
      <WorkTwoColumn projects={projects?.data} />
      <Testimonials testimonials={testimonials} />
      <Contact
        footerData={footer}
      />
      <PromotionPopup data={data.data?.attributes.promotionPopup} />
    </LightLayout>
  );
};

export default Home1;


