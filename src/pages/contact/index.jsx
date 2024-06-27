import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";
import getFooterData from "../api/getFooterData"

const Contact = ({ data }) => {

  const { contact_us_page_header_image, map_iframe } = data.data.attributes;
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout data={data}>
      <PageHeader
        title="Contact Us"
        image={''}
      />
      <section className="contact">
        <ContactInfo data={data.data.attributes} />
        <ContactWithMap iframeLink={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.303465946641!2d85.88857858504524!3d20.452725458485276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d269e94e3f5%3A0x888c137d183bd10e!2sPrakash%20films!5e0!3m2!1sen!2sin!4v1719499309469!5m2!1sen!2sin'} />
      </section>
    </MainLayout>
  );
};

export default Contact;



// getServersideProps
export const getStaticProps = async () => {
  const data = await getFooterData()
  return {
    props: {
      data
    },
    revalidate: 60 * 15,
  };
}