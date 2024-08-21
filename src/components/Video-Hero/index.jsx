import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const VideoHero = ({ header_text, header, header_images }) => {
  const { header_title } = header ?? {};

  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex - 1 + header_images.length) % header_images.length);
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % header_images.length);
  };

  const handleCircleClick = (circleIndex) => {
    setIndex(circleIndex);
  };

  return (
    <div
      className="bg-img valign"
      style={{
        position: "relative",
        backgroundImage: `url('/assets/img/patern.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        className="black-backdrop"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1,
        }}
      ></div>
      <div
        className="left-half"
        style={{
          position: "relative",
          zIndex: 2,
          width: "30%",
          padding: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="caption hmone my-auto"
          style={{
            paddingLeft: '80px'
          }}
        >
          <h5 className="thin text-white playfont">{header_title}</h5>
          <TypeAnimation
            sequence={[
              'Cinema',
              5000,
              'Storytelling',
              5000,
              'Film',
              5000,
            ]}
            style={{
              fontSize: "4em",
              fontWeight: "bold",
              fontFamily: "Playfair Display",
              color: "#DABD75",
            }}
            repeat={Infinity}
          />
          <p className="mt-10 text-white">Where Every Film Finds Its Audience</p>
        </div>
      </div>
      <div
        className="right-half"
        style={{
          position: "relative",
          zIndex: 2,
          width: "70%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Space between chevrons and image
          padding: '0 10%', // Padding to allocate 10% for chevrons
        }}
      >
        <ChevronLeft
          style={{
            color: 'white',
            border: '1px solid white',
            borderRadius: '100%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
          }}
          onClick={handlePrevClick}
        />
        <img
          src={header_images[index]}
          alt="carousel image"
          style={{
            maxWidth: "80%",
            maxHeight: "70%",
            objectFit: "contain",
            borderRadius: "10px",
            transition: "all 1s ease-in-out",
          }}
        />
        <ChevronRight
          style={{
            color: 'white',
            border: '1px solid white',
            borderRadius: '100%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
          }}
          onClick={handleNextClick}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            display: 'flex',
            columnGap: '12px',
            left: '50%', // Align center horizontally
            transform: 'translateX(-50%)', // Adjust alignment to center
          }}
        >
          {header_images.map((_, circleIndex) => (
            <div
              key={circleIndex}
              onClick={() => handleCircleClick(circleIndex)}
              style={{
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                border: '2px solid white',
                backgroundColor: index === circleIndex ? 'white' : 'transparent',
                cursor: 'pointer',
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
