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
    testimonial: "Prakash Films has been instrumental in the success of our film. Their innovative strategies and extensive network helped us reach audiences we never thought possible.",
    name: "John Doe, Director of 'The Epic Journey'"
  },
  {
    testimonial: "Working with Prakash Films was a seamless experience. Their team is professional, dedicated, and truly understands the film industry.",
    name: "Jane Smith, Producer of 'A Day in the Life'"
  },
  {
    testimonial: "The level of support and expertise provided by Prakash Films is unmatched. They helped us navigate the complexities of international markets with ease.",
    name: "Robert Brown, Producer of 'Global Adventure'"
  },
  {
    testimonial: "Thanks to Prakash Films, our film received the recognition it deserved. Their marketing efforts were top-notch and delivered outstanding results.",
    name: "Emily White, Director of 'Silent Whispers'"
  },
  {
    testimonial: "Prakash Films exceeded our expectations. Their commitment to quality and integrity is evident in everything they do.",
    name: "Michael Johnson, Producer of 'Beyond the Horizon'"
  },
  {
    testimonial: "From start to finish, the team at Prakash Films was a pleasure to work with. Their innovative approach to distribution made a significant impact on our film's success.",
    name: "Sarah Williams, Director of 'The Lost City'"
  },
  {
    testimonial: "Prakash Films' global reach and local expertise helped us connect with diverse audiences around the world. We couldn't be happier with the results.",
    name: "David Martinez, Producer of 'Cultural Tapestry'"
  },
  {
    testimonial: "Their comprehensive support and dedication to filmmakers set Prakash Films apart. They truly care about the success of each film they distribute.",
    name: "Linda Taylor, Director of 'Heartfelt Moments'"
  },
  {
    testimonial: "We were impressed by Prakash Films' professionalism and attention to detail. They went above and beyond to ensure our film's success.",
    name: "James Anderson, Producer of 'Mystery Unveiled'"
  },
  {
    testimonial: "Prakash Films delivered on their promises and helped our film achieve widespread acclaim. We highly recommend their services.",
    name: "Patricia Thompson, Director of 'Rising Star'"
  }
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


