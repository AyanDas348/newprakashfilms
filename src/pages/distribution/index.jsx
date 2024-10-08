/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkFourColumn from "../../components/Work-Four-Column";
import getAllProjects from "../api/getAllProjects";
import getPortfolioPageData from "../api/portfolio";
import getFooterData from "../api/getFooterData";

const Portfolio = ({ projects, data, footerData }) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  const { header_image, header_title, header_content } =
    data.data?.attributes ?? {};

  const mobile_header_images = Array.from({ length: 14 }).map((_, i) => `/assets/img/mobile-hero/mobile-img-${i + 1}.jpg`)

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

  return (
    <MainLayout data={footerData}>
      <WorkHeader
        center
        title={{
          first: header_title
            .split(" ")[0]
            .concat(" ")
            .concat(header_title.split(" ")[1]),
          second: header_title.split(" ")[2],
        }}
        content={header_content}
        headerImage={header_image}
      />
      <WorkFourColumn projects={mobile_header_images} newProjectLayout={newProjectLayout}/>
    </MainLayout>
  );
};

export default Portfolio;

export const getStaticProps = async () => {
  const [projects, data, footerData] = await Promise.all([
    getAllProjects(),
    getPortfolioPageData(),
    getFooterData(),
  ]);
  return {
    props: {
      projects,
      data,
      footerData,
    },
    revalidate: 60 * 15,
  };
};
